import { motion } from "framer-motion";
import { fadeUp } from "../../utils/allTransitions";
import { cn } from "../../utils/utils";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const cardClass =
  "rounded-4xl border border-gray-100 bg-gray-50/50 p-10 dark:border-white/10 dark:bg-white/5";

export function InfoCard({ title, children, delay, className }: InfoCardProps) {
  return (
    <motion.div {...fadeUp} transition={{ delay: delay }} className={cardClass}>
      <h3
        className={cn(
          "mb-10 text-center text-2xl font-bold lg:text-left",
          className,
        )}
      >
        {title}
      </h3>

      {children}
    </motion.div>
  );
}
