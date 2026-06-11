import { motion } from "framer-motion";
import { useCounter } from "../../hooks/useCounter";

type CounterProps = {
  target: number;
  className?: string;
};

export function Counter({ target, className }: CounterProps) {
  const { ref, rounded } = useCounter({ target });

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
