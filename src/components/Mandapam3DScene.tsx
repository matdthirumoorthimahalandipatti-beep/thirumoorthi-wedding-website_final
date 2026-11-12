import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

interface Mandapam3DSceneProps {
  scrollProgress: number; // 0..1 across scroll
}

const _camTargetPos = new THREE.Vector3();
const _camTargetLook = new THREE.Vector3();
const _currentLook = new THREE.Vector3(0, 1.4, -2.0);
const _dummy = new THREE.Object3D();

/**
 * Transparent Three.js WebGL 3D Continuity Overlay:
 * Renders orbiting golden temple rings, floating brass diyas, and sacred golden embers
 * directly over the user's authentic Madurai Temple & Couple hero artwork so the original
 * images remain crystal clear while adding genuine 3D depth and camera scroll continuity.
 */
export default function Mandapam3DScene({ scrollProgress }: Mandapam3DSceneProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef(scrollProgress);
  scrollRef.current = scrollProgress;

  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
        alpha: true,
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    const gl = renderer.getContext();
    if (!gl) {
      setWebglFailed(true);
      return;
    }

    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    const glRendererName = debugInfo ? String(gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)) : '';
    const isSoftwareGl = /SwiftShader|llvmpipe|Software Rasterizer/i.test(glRendererName);

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isSoftwareGl ? 1 : 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const canvas = renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    container.appendChild(canvas);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      Math.max(1, container.clientWidth) / Math.max(1, container.clientHeight),
      0.1,
      60
    );
    camera.position.set(0, 1.8, 10.5);

    const pmrem = new THREE.PMREMGenerator(renderer);
    const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = envRT.texture;
    scene.environmentIntensity = 0.7;

    const hemiLight = new THREE.HemisphereLight('#ffe3a3', '#3a0815', 1.1);
    scene.add(hemiLight);

    const brassMat = new THREE.MeshStandardMaterial({
      color: '#f4cf6a',
      metalness: 0.92,
      roughness: 0.2,
    });

    // Subtle framing Golden Sacred Kolam Arch Rings on left/right edges (leaves center image crisp)
    const archGroup = new THREE.Group();
    scene.add(archGroup);

    const haloOuter = new THREE.Mesh(new THREE.TorusGeometry(4.4, 0.032, 12, 72), brassMat);
    haloOuter.position.set(0, 1.3, -2.5);
    archGroup.add(haloOuter);

    const haloInner = new THREE.Mesh(new THREE.TorusGeometry(3.85, 0.018, 10, 64), brassMat);
    haloInner.position.set(0, 1.3, -2.5);
    archGroup.add(haloInner);

    // Floating Golden Sacred Sparkles / Temple Lamp Embers
    const MOTE_COUNT = isSoftwareGl ? 50 : 130;
    const moteGeo = new THREE.OctahedronGeometry(0.055, 0);
    const moteMat = new THREE.MeshStandardMaterial({
      color: '#ffd977',
      emissive: '#ffaa33',
      emissiveIntensity: 1.4,
      metalness: 0.5,
      roughness: 0.25,
    });
    const motesMesh = new THREE.InstancedMesh(moteGeo, moteMat, MOTE_COUNT);
    scene.add(motesMesh);

    const moteData = Array.from({ length: MOTE_COUNT }, () => ({
      x: (Math.random() - 0.5) * 14,
      y: Math.random() * 7.5 - 1.5,
      z: -6 + Math.random() * 10,
      speedY: 0.14 + Math.random() * 0.28,
      phase: Math.random() * Math.PI * 2,
      scale: 0.6 + Math.random() * 0.9,
    }));

    let pointerX = 0;
    let pointerY = 0;
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      pointerX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointerY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      if (!container) return;
      const w = Math.max(1, container.clientWidth);
      const h = Math.max(1, container.clientHeight);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
    resizeObserver.observe(container);

    let contextLost = false;
    const onContextLost = (ev: Event) => {
      ev.preventDefault();
      contextLost = true;
    };
    const onContextRestored = () => {
      contextLost = false;
    };
    canvas.addEventListener('webglcontextlost', onContextLost);
    canvas.addEventListener('webglcontextrestored', onContextRestored);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId = 0;
    let timerId = 0;
    let lastTime = performance.now();
    let elapsed = 0;
    let disposed = false;

    const animate = () => {
      if (disposed) return;
      if (contextLost) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const now = performance.now();
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTime) / 1000));
      lastTime = now;
      if (!prefersReducedMotion) elapsed += dt;

      const s = Math.max(0, Math.min(1, scrollRef.current));
      _camTargetPos.set(
        pointerX * 0.65,
        THREE.MathUtils.lerp(1.8, 1.35, s) - pointerY * 0.22,
        THREE.MathUtils.lerp(10.5, 4.8, s)
      );
      _camTargetLook.set(pointerX * 0.15, 1.35, -2.5);

      const lambda = prefersReducedMotion ? 20 : 4.2;
      camera.position.x = THREE.MathUtils.damp(camera.position.x, _camTargetPos.x, lambda, dt);
      camera.position.y = THREE.MathUtils.damp(camera.position.y, _camTargetPos.y, lambda, dt);
      camera.position.z = THREE.MathUtils.damp(camera.position.z, _camTargetPos.z, lambda, dt);

      _currentLook.x = THREE.MathUtils.damp(_currentLook.x, _camTargetLook.x, lambda, dt);
      _currentLook.y = THREE.MathUtils.damp(_currentLook.y, _camTargetLook.y, lambda, dt);
      _currentLook.z = THREE.MathUtils.damp(_currentLook.z, _camTargetLook.z, lambda, dt);
      camera.lookAt(_currentLook);

      haloOuter.rotation.z = elapsed * 0.06;
      haloInner.rotation.z = -elapsed * 0.09;

      for (let i = 0; i < MOTE_COUNT; i++) {
        const m = moteData[i];
        m.y += m.speedY * dt;
        if (m.y > 5.8) m.y = -2.2;
        _dummy.position.set(
          m.x + Math.sin(elapsed * 0.8 + m.phase) * 0.3,
          m.y,
          m.z
        );
        _dummy.rotation.set(elapsed + m.phase, elapsed * 0.7, 0);
        const sPulse = m.scale * (0.85 + Math.sin(elapsed * 2.5 + m.phase) * 0.25);
        _dummy.scale.setScalar(sPulse);
        _dummy.updateMatrix();
        motesMesh.setMatrixAt(i, _dummy.matrix);
      }
      motesMesh.instanceMatrix.needsUpdate = true;

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        timerId = window.setTimeout(() => {
          rafId = requestAnimationFrame(animate);
        }, 40);
      } else {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
      window.removeEventListener('pointermove', onPointerMove);
      resizeObserver.disconnect();
      canvas.removeEventListener('webglcontextlost', onContextLost);
      canvas.removeEventListener('webglcontextrestored', onContextRestored);

      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.InstancedMesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      envRT.dispose();
      pmrem.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) container.removeChild(canvas);
    };
  }, []);

  if (webglFailed) return null;
  return <div ref={containerRef} aria-hidden="true" className="pointer-events-none h-full w-full" />;
}
