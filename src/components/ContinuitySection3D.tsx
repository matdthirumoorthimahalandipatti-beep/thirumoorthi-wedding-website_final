import type { ReactNode } from 'react';

interface ContinuitySection3DProps {
  children: ReactNode;
  id?: string;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Immediate, zero-delay section wrapper (no 3D perspective/scroll-reveal lag).
 */
export default function ContinuitySection3D({
  children,
  id,
  ariaLabel,
  className = '',
  style,
}: ContinuitySection3DProps) {
  return (
    <section id={id} aria-label={ariaLabel} style={style} className={className}>
      {children}
    </section>
  );
}
