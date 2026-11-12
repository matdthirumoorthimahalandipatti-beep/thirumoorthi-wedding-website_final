import { HERITAGE_ASSETS } from '../data/weddingData';

const PETAL_SPRITES = Array.from({ length: 14 }, (_, idx) => ({
  id: idx,
  src: HERITAGE_ASSETS.rosePetals[idx % HERITAGE_ASSETS.rosePetals.length],
  left: `${(idx * 7.3 + 4) % 94}%`,
  size: 18 + (idx % 4) * 6,
  delay: `${-(idx * 1.4)}s`,
  duration: `${13 + (idx % 5) * 2.5}s`,
  driftX: `${(idx % 2 === 0 ? 1 : -1) * (35 + (idx % 4) * 18)}px`,
}));

export default function Petal3DFloat() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-25 overflow-hidden">
      {PETAL_SPRITES.map((petal) => (
        <img
          key={petal.id}
          src={petal.src}
          alt=""
          className="petal-3d-item"
          style={
            {
              left: petal.left,
              width: `${petal.size}px`,
              height: 'auto',
              animationDelay: petal.delay,
              '--fall-duration': petal.duration,
              '--drift-x': petal.driftX,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
