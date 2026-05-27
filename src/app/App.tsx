import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Navigation,
  Hero,
  About,
  Education,
  Experience,
  Projects,
  Skills,
  Contact,
  Footer,
  SoccerLoader,
} from "./components";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-[#1a1b26] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SoccerLoader />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="min-h-screen bg-[#1a1b26]">
        {/* Background Grid Pattern */}
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#414868_1px,transparent_1px),linear-gradient(to_bottom,#414868_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

        {/* Navigation */}
        <Navigation />

        {/* Sections */}
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
