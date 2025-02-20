import { motion } from "framer-motion";
const steps = ["Idea", "Design", "Code", "Interaction", "Optimization"];

const FlowChart2D = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[33vh] relative pt-[2rem]">
      <div className="font-medium text-xl p-[1rem]">
        <h3>Thought Process</h3>
      </div>
      <div className="flex flex-row items-center justify-around gap-4 sm:gap-12 rounded-lg">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-8 h-8 sm:w-12 sm:h-12 bg-black text-white flex items-center justify-center rounded-full border outline-2 outline-black outline-offset-1 z-10 transition-all hover:shadow-lg hover:shadow-gray-500"
            >
              {index + 1}
            </motion.div>
            <p className="text-sm mt-2 text-black font-medium">{step}</p>
            {index < steps.length - 1 && (
              <div className="hidden sm:block w-24 h-[2px] bg-black absolute top-6 left-12 z-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlowChart2D;
