import { motion } from 'framer-motion';
import { statsData } from '@/app/constants/stats';

const ProgressBar = ({ label, percentage, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm">
      <span className="text-white">{label}</span>
      <span className="text-gray-400">{percentage}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(to right, ${color})` }}
      />
    </div>
  </div>
);

const Stats = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-6">
        Skills & Expertise
      </h3>
      <div className="grid gap-6">
        {statsData.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <ProgressBar {...stat} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Stats; 