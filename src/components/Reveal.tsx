import { motion } from 'motion/react';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface RevealProps {
  children: ReactNode;
  /** Dirección desde la que entra el elemento. Por defecto 'up'. */
  direction?: Direction;
  /** Retraso en segundos antes de iniciar. */
  delay?: number;
  /** Duración de la animación en segundos. */
  duration?: number;
  className?: string;
}

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
}: RevealProps) {
  const { x, y } = offset[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
