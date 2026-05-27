import { motion } from "motion/react";
import { Github } from "lucide-react";

// Trọn bộ 6 dự án thực tế từ GitHub của bạn
const MY_PROJECTS = [
  {
    id: "project-1",
    title: "Adaptive Hybrid Filtering",
    description: "Co-first author research project for 3D Motion Capture. Engineered a core temporal smoothing component using Low-pass and Exponential Moving Average (EMA) filtering to reduce data jitter.",
    stats: "AI Research & Optimization",
    tags: ["OpenCV", "Python", "Data Processing", "Research"],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/huynhlong2706/MotionCapture"
  },
  {
    id: "project-2",
    title: "RAG Assistant",
    description: "An intelligent conversational assistant leveraging Retrieval-Augmented Generation (RAG). Built to retrieve contextually relevant information from custom knowledge bases for highly accurate NLP responses.",
    stats: "LLM & NLP Integration",
    tags: ["NLP", "LLM", "RAG", "Python"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/huynhlong2706/RAG-Assistant"
  },
  {
    id: "project-3",
    title: "Jobs Crawler System",
    description: "An automated web scraping and data pipeline built to crawl, parse, and aggregate job postings. Streamlines data collection to build custom datasets for market analysis.",
    stats: "Web & Data Engineering",
    tags: ["Ruby on Rails", "Web Scraping", "Data Pipeline", "Automation"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", 
    github: "https://github.com/huynhlong2706/Jobs-Crawler"
  },
  {
    id: "project-4",
    title: "Real-time Stock Monitor",
    description: "A dynamic real-time monitoring system for streaming and visualizing live stock market data. Engineered to handle low-latency data pipelines and track financial metrics on the fly.",
    stats: "Real-time Analytics",
    tags: ["Python", "Data Streaming", "WebSockets", "Finance", "Dashboard"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/huynhlong2706/Real_time-Stock-Monitoring-System"
  },
  {
    id: "project-5",
    title: "Mathematical Modeling",
    description: "Academic project (MM241) focusing on mathematical modeling and simulation. Applied computational algorithms and numerical methods to solve and visualize complex system behaviors.",
    stats: "Academic Research",
    tags: ["Math Modeling", "Simulation", "Algorithms", "Python"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/huynhlong2706/MM241-BTLMHH"
  },
  {
    id: "project-6",
    title: "React Pizza Store",
    description: "A dynamic frontend web application for a pizza restaurant. Features interactive menu browsing, real-time cart management, and seamless order checkout validation workflows.",
    stats: "Frontend Web App",
    tags: ["React", "JavaScript", "CSS", "UI/UX Design"],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop", // Ảnh placeholder Pizza cực đẹp
    github: "https://github.com/huynhlong2706/React-Pizza"
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6 bg-[#1a1b26]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#c0caf5] text-4xl font-bold tracking-tight">Featured Projects 🚀</h2>
          <p className="text-[#9aa5ce] max-w-2xl mx-auto text-lg">
            A selection of my recent work, ranging from core AI research and NLP modeling to real-time pipelines and web applications.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {MY_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.15, duration: 0.4 }}
              whileHover={{ y: -8 }}
              className="bg-[#24283b] border border-[#414868] rounded-2xl overflow-hidden hover:border-[#7aa2f7] hover:shadow-xl hover:shadow-[#7aa2f7]/15 transition-all group flex flex-col"
            >
              <div className="relative overflow-hidden h-52">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b26] via-[#1a1b26]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Khu vực nút bấm GitHub chính */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-[#7aa2f7] to-[#bb9af7] text-[#1a1b26] p-4 rounded-full hover:scale-110 shadow-lg shadow-[#7aa2f7]/30 transition-transform" 
                    title="View Source on GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>

                <div className="absolute top-4 left-4 bg-[#1a1b26]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#414868]">
                  <span className="text-[#9ece6a] text-xs font-bold tracking-wide uppercase">
                    {project.stats}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="mb-3 text-[#c0caf5] text-xl font-bold group-hover:text-[#7aa2f7] transition-colors">{project.title}</h3>
                <p className="text-[#9aa5ce] mb-6 text-sm leading-relaxed flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#1a1b26] text-[#7aa2f7] rounded-md text-xs font-mono border border-[#414868] group-hover:border-[#7aa2f7]/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
