import type { ComponentType } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
} from "lucide-react";

import { useEffect, useState } from "react";

const ASSET_BASE = import.meta.env.BASE_URL;

/* =========================
   ACHIEVEMENT STATS
========================= */

const ACHIEVEMENT_STATS = [
  {
    icon: "🧠",
    value: "AI",
    label: "Core Focus",
  },
  {
    icon: "🗻",
    value: "Japanese",
    label: "JP Tech Program",
  },
  {
    icon: "💻",
    value: "Software",
    label: "Foundation",
  },
];

/* =========================
   SOCIALS
========================= */

const SOCIAL_ICONS: Array<ComponentType<{ className?: string }>> = [
  Github,
  Linkedin,
  Mail,
];

const SOCIAL_LINKS = [
  "https://github.com/huynhlong2706",
  "https://www.linkedin.com/in/long-b%C3%B9i-97a7bb35b/",
  "mailto:bhlong2706@gmail.com",
];

/* =========================
   TYPEWRITER COMPONENT
========================= */

function TypewriterText() {
  const texts = [
    "Computer Science Student 🤖",
    "AI Engineer in Progress 🧠",
    "Software Developer 💻",
    "Tech Enthusiast ⚡",
  ];

  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(
            currentText.substring(0, displayText.length + 1)
          );

          if (displayText === currentText) {
            setTimeout(() => {
              setIsDeleting(true);
            }, 1500);
          }
        } else {
          setDisplayText(
            currentText.substring(0, displayText.length - 1)
          );

          if (displayText === "") {
            setIsDeleting(false);

            setTextIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 90
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className="text-[#9aa5ce] mb-6 text-xl md:text-2xl h-[36px] flex items-center"
    >
      <span>{displayText}</span>

      {/* Cursor */}
      <span className="ml-1 animate-pulse text-[#7aa2f7]">
        |
      </span>
    </motion.h2>
  );
}

/* =========================
   HERO SECTION
========================= */

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-40 right-20 text-6xl opacity-10"
      >
        ⚽
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute bottom-40 left-20 text-8xl opacity-5"
      >
        🏆
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-stretch">

          {/* =========================
              LEFT COLUMN
          ========================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="flex flex-col justify-center h-full"
          >

            {/* Main Title */}
            <motion.h1
              className="mb-4 text-[#c0caf5] text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Hi, I'm{" "}
              <span
                className="bg-gradient-to-r
                from-[#7aa2f7]
                to-[#bb9af7]
                bg-clip-text
                text-transparent"
              >
                Bui Huynh Long
              </span>{" "}
              👋
            </motion.h1>

            {/* Typewriter */}
            <TypewriterText />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[#9aa5ce]
              mb-8
              leading-relaxed
              text-lg"
            >
              Studying at HCMUT-VNU. Passionate about
              building intelligent systems at the
              intersection of Artificial Intelligence and
              Software Development.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >

              {/* Projects */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3
                bg-gradient-to-r
                from-[#7aa2f7]
                to-[#bb9af7]
                text-[#1a1b26]
                rounded-xl
                flex items-center gap-2
                shadow-lg
                shadow-[#7aa2f7]/20
                hover:shadow-xl
                hover:shadow-[#7aa2f7]/30
                transition-shadow
                font-medium"
              >
                View My Work

                <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Contact */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3
                border-2 border-[#414868]
                text-[#c0caf5]
                rounded-xl
                hover:border-[#7aa2f7]
                transition-colors"
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-4 mt-8"
            >
              {SOCIAL_ICONS.map((Icon, index) => (
                <motion.a
                  key={index}
                  href={SOCIAL_LINKS[index]}
                  target={
                    SOCIAL_LINKS[index].startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    SOCIAL_LINKS[index].startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10
                  flex items-center justify-center
                  rounded-full
                  bg-[#24283b]
                  text-[#7aa2f7]
                  hover:bg-[#414868]
                  transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Achievement Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              {ACHIEVEMENT_STATS.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-[#24283b]
                  border border-[#414868]
                  rounded-2xl
                  p-4
                  text-center"
                >
                  <div className="text-2xl mb-1">
                    {stat.icon}
                  </div>

                  <div className="text-xl font-bold text-[#7aa2f7] mb-1">
                    {stat.value}
                  </div>

                  <div className="text-xs text-[#9aa5ce]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT COLUMN
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="relative
            flex flex-col items-center
            h-full
            mt-10 md:mt-0"
          >

            {/* Avatar */}
            <div className="flex-1 flex items-center justify-center w-full pb-8">

              <motion.div
                animate={{
                  rotate: [0, 3, 0, -3, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >

                <div
                  className="w-72 h-72
                  md:w-80 md:h-80
                  rounded-full
                  overflow-hidden
                  border-4 border-[#414868]
                  shadow-2xl
                  bg-[#1a1b26]
                  relative z-10"
                >
                  <img
                    src={`${ASSET_BASE}avatar.JPG`}
                    alt="Bui Huynh Long"
                    className="w-full h-full object-cover object-bottom scale-125"
                  />
                </div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0
                  rounded-full
                  bg-gradient-to-t
                  from-[#1a1b26]/80
                  via-transparent
                  to-transparent
                  z-20
                  pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Bongo Cat */}
            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.2,
                duration: 0.6,
              }}
              className="mt-auto w-full flex justify-center"
            >

              <div
                className="rounded-2xl
                bg-[#1f2335]/70
                border border-[#414868]
                shadow-xl
                px-5 py-4"
              >
                <video
                  src={`${ASSET_BASE}bongo-cat-neon-moewalls-com.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-52 h-32
                  md:w-56 md:h-36
                  object-contain
                  opacity-95
                  mix-blend-screen"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
