import { motion } from "motion/react";
import { NAV_ITEMS } from "../constants";

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-0 w-full bg-[#1a1b26]/80 backdrop-blur-md z-50 border-b border-[#414868]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="font-bold text-xl
          bg-gradient-to-r
          from-[#7aa2f7]
          to-[#bb9af7]
          bg-clip-text
          text-transparent
          flex items-center gap-2
          cursor-pointer"
        >
          Portfolio
        </motion.a>

        {/* Navigation Items */}
        <div className="flex gap-6 items-center">

          {NAV_ITEMS.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3 + index * 0.1,
              }}
              className="group relative text-[#9aa5ce] hover:text-[#7aa2f7] transition-colors pb-1"
            >
              {item}

              {/* Animated Underline */}
              <span className="absolute left-0 bottom-0 h-[1.5px] w-full origin-left scale-x-0 rounded-full bg-[#7aa2f7] shadow-[0_0_8px_#7aa2f7] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
