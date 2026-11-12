import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ContinuitySection3DProps {
  children: ReactNode;
  id?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Scroll-driven 3D continuity reveal wrapper:
 * Gently glides sections into place along Z/Y and perspective X rotation
 * as the guest scrolls through the Madurai wedding story.
 */
export default function ContinuitySection3D({
  children,
  id,
  ariaLabel,
  className = '',
  style,
}: ContinuitySection3DProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      style={{
        ...style,
        transform: visible
          ? 'perspective(1400px) translate3d(0, 0, 0) rotateX(0deg) scale(1)'
          : 'perspective(1400px) translate3d(0, 28px, -36px) rotateX(2.4deg) scale(0.985)',
        opacity: visible ? 1 : 0.72,
        transition:
          'transform 0.85s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.75s ease-out',
      }}
      className={className}
    >
      {children}
    </section>
  );
}
