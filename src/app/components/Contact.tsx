import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Copy,
  Check,
  Facebook,
  Instagram,
} from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const email = "bhlong2706@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="relative py-16 px-4 bg-[#161925]"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[#c0caf5] text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Let's Connect
            <span className="text-[#7aa2f7]">.</span>
          </h2>

          <p className="text-[#9aa5ce] text-base md:text-lg">
            Have a project in mind or want to chat about AI? Drop me a message.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="col-span-2 md:col-span-3
            bg-[#1a1b26]
            border border-[#2a2f45]
            rounded-3xl
            p-5
            flex flex-col justify-between
            group
            hover:border-[#414868]
            transition-colors"
          >
            <div>
              <div
                className="inline-flex items-center gap-2
                px-3 py-1.5
                rounded-full
                bg-[#9ece6a]/10
                border border-[#9ece6a]/20
                text-[#9ece6a]
                text-xs md:text-sm
                font-medium
                mb-6"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9ece6a] opacity-75"></span>

                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#9ece6a]"></span>
                </span>

                Open to opportunities
              </div>

              <h3
                className="text-[#c0caf5]
                text-2xl md:text-3xl
                font-bold
                leading-tight
                mb-3"
              >
                Looking for a dedicated
                <br />
                AI Engineer?
              </h3>
            </div>

            <p
              className="text-[#5a6a8a]
              text-xs
              font-mono
              uppercase
              tracking-wider"
            >
              Let's build the future together.
            </p>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.1 }}
            onClick={handleCopyEmail}
            className="col-span-2 md:col-span-3
            bg-gradient-to-br
            from-[#7aa2f7]
            to-[#bb9af7]
            rounded-3xl
            p-5
            flex flex-col justify-between
            cursor-pointer
            group
            hover:shadow-lg
            hover:shadow-[#7aa2f7]/20
            transition-all
            relative
            overflow-hidden"
          >
            {/* Decorative Icon */}
            <div
              className="absolute
              -right-6
              -top-6
              text-[#1a1b26]
              opacity-10
              group-hover:scale-110
              transition-transform
              duration-500"
            >
              <Mail className="w-36 h-36" />
            </div>

            <div className="flex justify-between items-start relative z-10 text-[#1a1b26]">
              <div
                className="w-10 h-10
                rounded-full
                bg-[#1a1b26]/10
                flex items-center justify-center
                backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
              </div>

              {copied ? (
                <Check className="w-5 h-5" />
              ) : (
                <Copy
                  className="w-5 h-5
                  opacity-70
                  group-hover:opacity-100
                  transition-opacity"
                />
              )}
            </div>

            <div className="relative z-10 mt-10">
              <p
                className="text-[#1a1b26]/80
                font-bold
                mb-1
                text-xs
                uppercase
                tracking-wider"
              >
                {copied
                  ? "Copied to clipboard!"
                  : "Click to copy email"}
              </p>

              <h4
                className="text-[#1a1b26]
                font-bold
                text-lg md:text-xl
                truncate"
              >
                {email}
              </h4>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.2 }}
            className="col-span-2 md:col-span-2
            bg-[#1a1b26]
            border border-[#2a2f45]
            rounded-3xl
            p-5
            flex flex-col items-center justify-center
            text-center
            group
            hover:border-[#e0af68]
            transition-colors"
          >
            <div
              className="w-11 h-11
              rounded-full
              bg-[#e0af68]/10
              flex items-center justify-center
              text-[#e0af68]
              mb-3
              group-hover:scale-110
              group-hover:bg-[#e0af68]/20
              transition-all"
            >
              <MapPin className="w-5 h-5" />
            </div>

            <h4 className="text-[#c0caf5] font-bold text-base">
              Ho Chi Minh City
            </h4>

            <p className="text-[#5a6a8a] text-xs mt-1">
              Vietnam (UTC+7)
            </p>
          </motion.div>

          {/* LinkedIn */}
          <motion.a
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.3 }}
            href="https://www.linkedin.com/in/long-b%C3%B9i-97a7bb35b/"
            target="_blank"
            rel="noreferrer"
            className="col-span-1
            bg-[#1a1b26]
            border border-[#2a2f45]
            rounded-3xl
            p-4
            flex flex-col items-center justify-center
            group
            hover:border-[#7aa2f7]
            transition-colors"
          >
            <div
              className="w-10 h-10
              rounded-full
              bg-[#7aa2f7]/10
              flex items-center justify-center
              text-[#7aa2f7]
              mb-2
              group-hover:scale-110
              transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </div>

            <h4
              className="text-[#c0caf5]
              font-bold
              text-xs md:text-sm
              group-hover:text-[#7aa2f7]
              transition-colors"
            >
              LinkedIn
            </h4>
          </motion.a>

          {/* GitHub */}
          <motion.a
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.4 }}
            href="https://github.com/huynhlong2706"
            target="_blank"
            rel="noreferrer"
            className="col-span-1
            bg-[#1a1b26]
            border border-[#2a2f45]
            rounded-3xl
            p-4
            flex flex-col items-center justify-center
            group
            hover:border-[#c0caf5]
            transition-colors"
          >
            <div
              className="w-10 h-10
              rounded-full
              bg-[#c0caf5]/10
              flex items-center justify-center
              text-[#c0caf5]
              mb-2
              group-hover:scale-110
              transition-all"
            >
              <Github className="w-5 h-5" />
            </div>

            <h4
              className="text-[#c0caf5]
              font-bold
              text-xs md:text-sm
              group-hover:text-white
              transition-colors"
            >
              GitHub
            </h4>
          </motion.a>

          {/* Facebook */}
          <motion.a
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.5 }}
            href="https://www.facebook.com/bui.huynh.long.2706"
            target="_blank"
            rel="noreferrer"
            className="col-span-1
            bg-[#1a1b26]
            border border-[#2a2f45]
            rounded-3xl
            p-4
            flex flex-col items-center justify-center
            group
            hover:border-[#2ac3de]
            transition-colors"
          >
            <div
              className="w-10 h-10
              rounded-full
              bg-[#2ac3de]/10
              flex items-center justify-center
              text-[#2ac3de]
              mb-2
              group-hover:scale-110
              transition-all"
            >
              <Facebook className="w-5 h-5" />
            </div>

            <h4
              className="text-[#c0caf5]
              font-bold
              text-xs md:text-sm
              group-hover:text-[#2ac3de]
              transition-colors"
            >
              Facebook
            </h4>
          </motion.a>

          {/* Instagram */}
          <motion.a
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.6 }}
            href="https://www.instagram.com/_hyunh.logn_/"
            target="_blank"
            rel="noreferrer"
            className="col-span-1
            bg-[#1a1b26]
            border border-[#2a2f45]
            rounded-3xl
            p-4
            flex flex-col items-center justify-center
            group
            hover:border-[#f7768e]
            transition-colors"
          >
            <div
              className="w-10 h-10
              rounded-full
              bg-[#f7768e]/10
              flex items-center justify-center
              text-[#f7768e]
              mb-2
              group-hover:scale-110
              transition-all"
            >
              <Instagram className="w-5 h-5" />
            </div>

            <h4
              className="text-[#c0caf5]
              font-bold
              text-xs md:text-sm
              group-hover:text-[#f7768e]
              transition-colors"
            >
              Instagram
            </h4>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
