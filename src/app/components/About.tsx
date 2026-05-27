import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Brain, Gamepad2, Quote, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
const ABOUT_CARDS = [
  {
    id: "expertise",
    title: "Expertise & Tech",
    icon: Brain,
    color: "from-[#7aa2f7] to-[#bb9af7]",
    description:
      "Focusing heavily on Artificial Intelligence and NLP. I specialize in building intelligent models using Python and PyTorch, while leveraging modern full-stack tools to bring them to life.",
  },
  {
    id: "off-screen",
    title: "Off the Screen",
    icon: Gamepad2,
    color: "from-[#9ece6a] to-[#e0af68]",
    description:
      "When I'm not coding, you'll likely find me controlling the tempo as a central midfielder on the pitch, vibing to music as a musicaholic, or exploring a new city.",
  },
  {
    id: "philosophy",
    title: "Philosophy",
    icon: Quote,
    color: "from-[#f7768e] to-[#ff9e64]",
    description:
      "I believe life asks us to look in 6 directions — each one a reminder of who we are, where we come from, and where we're going.",
  },
];

const DIRECTIONS = [
  {
    dir: "↑",
    label: "Look Up",
    title: "To Remember",
    desc: "To honor those who are no longer with us — their absence still shapes who we are.",
    color: "#bb9af7",
    icon: "🌌",
    photo: "sky / in memoriam",
    imgSrc: "/up.JPG",
  },
  {
    dir: "←",
    label: "Look Back",
    title: "Know Your Roots",
    desc: "To know where you came from — family, childhood, the beginning of everything.",
    color: "#e0af68",
    icon: "🏡",
    photo: "family / childhood",
    imgSrc: "/behind.jpg",
  },
  {
    dir: "→",
    label: "Look Beside",
    title: "Who Walks With You",
    desc: "To see who walks alongside — the friends who make the journey worth it.",
    color: "#9ece6a",
    icon: "🤝",
    photo: "friends",
    imgSrc: "/beside.JPG",
  },
  {
    dir: "↓",
    label: "Look Down",
    title: "Be Grateful",
    desc: "To be grateful to teachers and mentors who lifted you from your very first steps.",
    color: "#7aa2f7",
    icon: "🙏",
    photo: "teachers / mentors",
    imgSrc: "/down.JPG",
  },
  {
    dir: "↗",
    label: "Look Forward",
    title: "Don't Stumble",
    desc: "To stay focused on the path ahead — studying, building, growing every single day.",
    color: "#2ac3de",
    icon: "🎯",
    photo: "study / work",
    imgSrc: "/forward.JPG",
  },
  {
    dir: "◉",
    label: "Look Within",
    title: "Find Yourself",
    desc: "To look inward, find the child within — and realize they are still there, waiting to be loved more.",
    color: "#f7768e",
    icon: "🐉", // Thay gương bằng biểu tượng Rồng của bạn
    photo: "yourself",
    isCenter: true,
    imgSrc: "/within.jpg",
  },
];

// ─── Expertise Modal ────────────────────────────────────────────────────────
// ─── Expertise Modal ────────────────────────────────────────────────────────
function ExpertiseModal({ onClose }: { onClose: () => void }) {
  const [text, setText] = useState("Build intelligent systems that matter.");
  const stats = useMemo(() => {
    const tokens = text.trim().split(/\s+/).filter(Boolean).length;
    const hasPositive = /love|build|learn|create|matter/i.test(text);
    return { tokens, sentiment: hasPositive ? "Positive ✦" : "Neutral" };
  }, [text]);

  return (
    <ModalShell onClose={onClose} accentColor="#7aa2f7" wide>
      <ModalHeader
        label="AI Lab & Research Dashboard"
        title="Expertise & Tech"
        desc="A snapshot of my research focus, intelligent model performance, and full-stack deployment skills."
        labelColor="#7aa2f7"
      />

      {/* Cập nhật Stats sát với thực tế xử lý dữ liệu và AI */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { k: "Frames Processed", v: "15,000+" }, // Nhấn mạnh vào data Motion Capture
          { k: "Smoothing Gain", v: "+26%" },      // Hiệu suất tăng thêm nhờ thuật toán của bạn
          { k: "Core Stack", v: "PyTorch" },       // Chuyên môn AI
        ].map((s) => (
          <div key={s.k} className="rounded-xl border border-[#2a2f45] bg-[#161925] p-4 flex flex-col justify-center">
            <p className="text-[#5a6a8a] text-[10px] md:text-xs tracking-widest uppercase">{s.k}</p>
            <p className="text-[#c0caf5] text-lg md:text-2xl font-bold mt-1">{s.v}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Timeline cập nhật đúng Project thực tế của bạn */}
        <div className="rounded-xl border border-[#2a2f45] bg-[#161925] p-6 flex flex-col justify-between">
          <div>
            <p className="text-[#5a6a8a] text-xs tracking-widest uppercase mb-4">Research Highlight</p>
            <h4 className="text-[#c0caf5] font-semibold mb-1 text-lg">Adaptive Hybrid Filtering</h4>
            <p className="text-[#7aa2f7] text-sm font-mono mb-5">for 3D Motion Capture</p>
            
            <ol className="relative border-l border-[#2a2f45] space-y-6 pl-5 mb-6">
              <li className="relative">
                <span className="absolute -left-[25px] w-3 h-3 rounded-full bg-[#7aa2f7] border-2 border-[#161925] top-1" />
                <p className="text-[#7aa2f7] text-xs font-mono">Phase 1</p>
                <p className="text-[#9aa5ce] text-sm mt-1">Framed the jitter reduction problem in 3D skeleton data.</p>
              </li>
              <li className="relative">
                <span className="absolute -left-[25px] w-3 h-3 rounded-full bg-[#7aa2f7] border-2 border-[#161925] top-1" />
                <p className="text-[#7aa2f7] text-xs font-mono">Phase 2</p>
                <p className="text-[#c0caf5] font-medium text-sm mt-1">
                  Engineered core temporal smoothing using <span className="text-[#bb9af7]">Low-pass</span> & <span className="text-[#bb9af7]">EMA</span> filtering.
                </p>
              </li>
              <li className="relative">
                <span className="absolute -left-[25px] w-3 h-3 rounded-full bg-[#7aa2f7] border-2 border-[#161925] top-1" />
                <p className="text-[#7aa2f7] text-xs font-mono">Phase 3</p>
                <p className="text-[#9aa5ce] text-sm mt-1">Co-first author: Validated efficiency gains on benchmarks.</p>
              </li>
            </ol>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#2a2f45]">
            <p className="text-[#5a6a8a] text-xs tracking-widest uppercase mb-2">Filtering Efficiency</p>
            {[
              { label: "Baseline / Raw Data", pct: 62, color: "#7aa2f7" },
              { label: "With Hybrid EMA", pct: 88, color: "#bb9af7" },
            ].map((b) => (
              <div key={b.label}>
                <div className="flex justify-between text-xs text-[#9aa5ce] mb-1.5">
                  <span>{b.label}</span><span className="font-mono">{b.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#24283b] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${b.pct}%` }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: b.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Giữ lại NLP Demo vì nó thể hiện mục tiêu AI Engineer/NLP của bạn */}
        <div className="flex flex-col gap-5">
          <div className="rounded-xl border border-[#2a2f45] bg-[#161925] p-6 flex-1 flex flex-col">
            <p className="text-[#5a6a8a] text-xs tracking-widest uppercase mb-2">NLP Domain Focus</p>
            <h4 className="text-[#c0caf5] font-semibold mb-4 text-lg">Interactive Playground</h4>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              spellCheck="false"
              rows={4}
              className="flex-1 w-full rounded-xl bg-[#1a1b26] border border-[#2a2f45] text-[#c0caf5] p-4 text-sm focus:outline-none focus:border-[#7aa2f7] focus:ring-1 focus:ring-[#7aa2f7] resize-none font-mono transition-all"
              placeholder="Type a sentence to analyze..."
            />
            <div className="mt-4 flex gap-2 flex-wrap">
              {[
                { k: "Tokens", v: stats.tokens },
                { k: "Sentiment", v: stats.sentiment },
                { k: "Chars", v: text.length },
              ].map((s) => (
                <div key={s.k} className="px-3 py-2 rounded-lg bg-[#24283b] text-xs text-[#9aa5ce] border border-[#2a2f45] flex items-center gap-1.5">
                  {s.k}: <span className="text-[#c0caf5] font-semibold">{s.v}</span>
                </div>
              ))}
            </div>
            <p className="text-[#5a6a8a] text-[10px] mt-4 text-right italic">
              * Real-time text tokenization simulation
            </p>
          </div>
          
          {/* Tech Stack Tags */}
          <div className="rounded-xl border border-[#2a2f45] bg-[#161925] p-5">
            <p className="text-[#5a6a8a] text-xs tracking-widest uppercase mb-3">Core Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'PyTorch', 'NumPy', 'OpenCV', 'React', 'Node.js', 'MongoDB'].map(tech => (
                <span key={tech} className="px-2.5 py-1 rounded text-xs font-medium bg-[#1a1b26] border border-[#2a2f45] text-[#c0caf5] hover:border-[#7aa2f7] transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ModalShell>
  );
}

// ─── Off-Screen Modal ────────────────────────────────────────────────────────
function OffScreenModal({ onClose }: { onClose: () => void }) {
  const HOBBIES = [
    { icon: "⚽", name: "Football", role: "Central Midfielder", stats: [["Control", "99"], ["Vision", "99"], ["Passing", "99"]], color: "#9ece6a" },
    { icon: "🏸", name: "Badminton", role: "Weekend Warrior", stats: [["Smash", "95"], ["Footwork", "90"], ["Stamina", "92"]], color: "#e0af68" },
    { icon: "🎵", name: "Music", role: "Musicaholic", stats: [["POP", "99"], ["Indie", "97"], ["Rap", "98"]], color: "#bb9af7" },
    { icon: "🎬", name: "Movies", role: "Cinema Lover", stats: [["Any Genre", "99"], ["Thriller", "97"], ["Sci-Fi", "95"]], color: "#7aa2f7" },
    { icon: "✈️", name: "Travel", role: "Explorer", stats: [["Vietnam", "100"], ["Asia", "98"], ["Europe", "98"]], color: "#f7768e" },
  ];

  const [active, setActive] = useState(0);
  const h = HOBBIES[active];

  return (
    <ModalShell onClose={onClose} accentColor="#9ece6a">
      <ModalHeader
        label="The Human Side"
        title="Off the Screen"
        desc="Life beyond the terminal — passions, hobbies, and what keeps me grounded."
        labelColor="#9ece6a"
      />

      <div className="grid lg:grid-cols-5 gap-6 mt-2">
        {/* Sidebar tabs - Hidden scrollbar on mobile */}
        <div className="lg:col-span-2 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {HOBBIES.map((hb, i) => (
            <button
              key={hb.name}
              type="button"
              onClick={() => setActive(i)}
              className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all whitespace-nowrap lg:whitespace-normal flex-shrink-0 lg:flex-shrink ${
                active === i
                  ? "border-current bg-[#161925] shadow-lg"
                  : "border-[#2a2f45] bg-[#1a1b26] hover:border-[#414868]"
              }`}
              style={{ color: active === i ? hb.color : "#9aa5ce" }}
            >
              <span className="text-2xl drop-shadow-md">{hb.icon}</span>
              <div>
                <p className="font-bold text-sm md:text-base">{hb.name}</p>
                <p className="text-xs opacity-70 mt-0.5">{hb.role}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:col-span-3 rounded-xl border border-[#2a2f45] bg-[#161925] p-6 md:p-8 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#1a1b26] border border-[#2a2f45] flex items-center justify-center text-3xl shadow-inner">
                {h.icon}
              </div>
              <div>
                <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: h.color }}>{h.role}</p>
                <h4 className="text-[#c0caf5] text-2xl font-bold">{h.name}</h4>
              </div>
            </div>
            
            <div className="space-y-5">
              {h.stats.map(([label, val]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm text-[#9aa5ce] mb-2">
                    <span className="font-medium">{label}</span>
                    <span className="font-mono text-[#c0caf5]">{val}</span>
                  </div>
                  <div className="h-2 rounded-full bg-[#24283b] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${val}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: h.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </ModalShell>
  );
}

// ─── Philosophy Modal — 6 Directions ─────────────────────────────────────────
// ─── Philosophy Modal — 6 Directions (Carousel Layout) ──────────────────────
function PhilosophyModal({ onClose }: { onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === DIRECTIONS.length - 1 ? 0 : prevIndex + 1));
  };

  const slidePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? DIRECTIONS.length - 1 : prevIndex - 1));
  };

  const currentSlide = DIRECTIONS[currentIndex];

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <ModalShell onClose={onClose} accentColor={currentSlide.color} wide>
      <ModalHeader
        label="Personal Philosophy"
        title="6 Directions of Life"
        desc='"Mỗi chúng ta đều phải nhìn về 6 hướng"'
        labelColor={currentSlide.color}
      />

      {/* Đã tăng chiều cao lên h-[500px] hoặc h-[600px] cho màn to */}
      <div className="relative rounded-3xl border border-[#2a2f45] bg-[#161925] overflow-hidden flex flex-col md:flex-row h-[500px] lg:h-[550px]">
        
        {/* Nút điều hướng to hơn */}
        <button
          onClick={slidePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/35 border border-white/10 flex items-center justify-center text-white hover:bg-black/60 hover:scale-110 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-7 h-7 -ml-1" />
        </button>
        <button
          onClick={slideNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 hover:scale-110 backdrop-blur-md transition-all"
        >
          <ChevronRight className="w-7 h-7 ml-1" />
        </button>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 250, damping: 25 },
              opacity: { duration: 0.2 },
            }}
            className="flex flex-col md:flex-row w-full h-full absolute inset-0"
          >
            {/* Nửa Ảnh */}
            <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-[#1a1b26] flex items-center justify-center">
              {currentSlide.imgSrc ? (
                <img
                  src={currentSlide.imgSrc}
                  alt={currentSlide.photo}
                  className="absolute inset-0 h-full w-full object-contain"
                />
              ) : (
                <span className="text-7xl opacity-20 z-0">📷</span>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#161925] to-transparent md:bg-gradient-to-r z-10" />
              <span className="absolute bottom-6 left-6 z-20 text-sm font-mono text-[#5a6a8a]">{currentSlide.photo}</span>
            </div>

            {/* Nửa Chữ - Padding to hơn, font to hơn */}
            <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center relative z-20 bg-[#161925]">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl md:text-5xl drop-shadow-md">{currentSlide.icon}</span>
                <span className="text-2xl md:text-3xl font-bold" style={{ color: currentSlide.color }}>{currentSlide.dir}</span>
              </div>
              
              <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: currentSlide.color }}>
                Direction {currentIndex + 1} / 6
              </p>
              <h4 className="text-[#c0caf5] text-3xl md:text-4xl font-bold mb-6">{currentSlide.title}</h4>
              <p className="text-[#9aa5ce] leading-relaxed text-base md:text-lg mb-8">
                {currentSlide.desc}
              </p>

              <div 
                className="inline-flex px-5 py-2.5 rounded-xl border bg-[#1a1b26] w-fit text-sm font-bold uppercase tracking-wider"
                style={{ borderColor: currentSlide.color + "50", color: currentSlide.color }}
              >
                {currentSlide.label}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 rounded-2xl border border-[#f7768e33] bg-gradient-to-r from-[#f7768e11] to-transparent p-6 flex items-center justify-between">
        <p className="text-[#f7768e] text-base md:text-lg font-medium italic">
          "Nhìn đủ 6 hướng — để sống một cuộc đời trọn vẹn."
        </p>
        <div className="flex items-center gap-3 text-[#5a6a8a]">
           <span className="text-2xl">🐉</span>
           <span className="text-sm font-bold tracking-widest uppercase">Bui Huynh Long</span>
        </div>
      </div>
    </ModalShell>
  );
}

// ─── Shared Layout Helpers ───────────────────────────────────────────────────
function ModalShell({ children, accentColor, wide, onClose }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        /* Đã nâng max-w lên 6xl (cực rộng) và padding to ra */
        className={`relative w-full ${wide ? "max-w-6xl" : "max-w-4xl"} bg-[#1a1b26] border border-[#2a2f45] rounded-3xl shadow-2xl p-6 md:p-10 overflow-y-auto max-h-[95vh]`}
        style={{ boxShadow: `0 20px 60px -10px ${accentColor}25` }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-[#161925] border border-[#2a2f45] flex items-center justify-center text-[#9aa5ce] hover:text-white hover:bg-[#24283b] transition-all z-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
}

function ModalHeader({ label, title, desc, labelColor }: any) {
  return (
    <div className="mb-8 pr-12">
      <p className="text-xs md:text-sm font-mono tracking-widest uppercase mb-2" style={{ color: labelColor }}>{label}</p>
      <h3 className="text-[#c0caf5] text-3xl md:text-4xl font-bold tracking-tight mb-3">{title}</h3>
      <p className="text-[#9aa5ce] text-sm md:text-base leading-relaxed max-w-xl">{desc}</p>
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export function About() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  return (
    <section id="about" className="relative py-24 px-6 bg-[#24283b] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-[#c0caf5] text-4xl font-bold tracking-tight">About Me</h2>
          <p className="text-[#9aa5ce] max-w-2xl mx-auto text-lg leading-relaxed">
            I'm a Computer Science student at HCMUT blending strong mathematical foundations
            with modern software engineering. Like a midfielder reading the game, I love
            analyzing data and orchestrating intelligent solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ABOUT_CARDS.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => setActiveModal(card.id)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group block p-8 rounded-3xl bg-[#1a1b26] border border-[#2a2f45] hover:border-[#414868] shadow-lg transition-all cursor-pointer text-left relative overflow-hidden"
              >
                {/* Glow effect hắt từ dưới lên */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${card.color} opacity-5 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-md`}>
                  <Icon className="w-7 h-7 text-[#1a1b26]" />
                </div>
                
                <div className="text-[#5a6a8a] font-mono text-xs mb-3 font-bold tracking-widest">
                  0{index + 1}.
                </div>
                <h3 className="mb-3 text-[#c0caf5] text-xl font-bold group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="text-[#9aa5ce] leading-relaxed mb-8 text-sm">
                  {card.description}
                </p>
                <div className="flex items-center text-[#7aa2f7] text-sm font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {activeModal === "expertise" && <ExpertiseModal onClose={() => setActiveModal(null)} />}
        {activeModal === "off-screen" && <OffScreenModal onClose={() => setActiveModal(null)} />}
        {activeModal === "philosophy" && <PhilosophyModal onClose={() => setActiveModal(null)} />}
      </AnimatePresence>
    </section>
  );
}
