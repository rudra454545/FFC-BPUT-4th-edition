import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: number;
  label: string;
  suffix?: string;
}

const Counter = ({ value, label, suffix = "" }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const displayValue = useMotionValue("0");

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      displayValue.set(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [springValue, displayValue]);

  return (
    <div ref={ref} className="text-center">
      <motion.div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
        {isInView && (
          <motion.span>
            {springValue.get().toFixed(0)}
            {suffix}
          </motion.span>
        )}
      </motion.div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  );
};

export const StatsCounter = () => {
  return (
    <section className="py-24 relative pt-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="glass-card p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter value={12} label="Total Teams" />
            <Counter value={50} label="Total Players" suffix="+" />
            <Counter value={12} label="Total Matches" />
            <Counter value={6} label="Maps" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
