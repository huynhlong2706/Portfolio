import { motion } from "motion/react";

export function SoccerLoader() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* Quả bóng với hiệu ứng xoay, sử dụng hình ảnh tĩnh */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative"
      >
        {/* Shadow dưới bóng */}
        <div className="absolute -bottom-12 w-32 h-6 bg-gradient-to-r from-transparent via-black to-transparent rounded-full blur-lg opacity-20" />

        {/* Ảnh quả bóng thực tế */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg"
          alt="Soccer Ball Loading"
          width="120"
          height="120"
          className="w-32 h-32 rounded-full object-cover relative z-10"
        />
      </motion.div>

      {/* Text "Đang dẫn bóng" */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-[#7aa2f7] font-medium text-lg mt-6"
      >
        Đang dẫn bóng
      </motion.p>

      {/* Loading dots */}
      <div className="flex gap-2">
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: index * 0.25,
              ease: "easeInOut",
            }}
            className="w-2.5 h-2.5 bg-white rounded-full"
          />
        ))}
      </div>
    </div>
  );
}
