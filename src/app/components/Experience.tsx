import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const EXPERIENCE = [
  {
    id: "ak-technology",
    company: "AK Technology",
    role: "AI Engineer Intern", 
    period: "06/2026 - 08/2026",
    logo: "/AK.png", // Đã cập nhật tên ảnh
    highlights: [
      "Researching and developing an AI Assistant using Large Language Models (LLM) and Retrieval-Augmented Generation (RAG).",
      "Focusing on healthcare applications: assisting with disease diagnosis, dietary/exercise recommendations, and health monitoring.",
      "Addressing the rapid aging population problem in Vietnam by providing accessible AI-driven medical support.",
    ],
    color: "#7aa2f7" 
  },
  {
    id: "zigexn-ventura",
    company: "ZIGExN VENTURA",
    role: "Web Developer Intern",
    period: "05/2026 - 06/2026",
    logo: "/Ventura.png", // Đã cập nhật tên ảnh
    highlights: [
      "Trained in Japanese corporate communication culture, specifically the Ho-Ren-So (Report - Communicate - Consult) framework.",
      "Developed a Job Crawler system to automatically scrape, parse, and aggregate job posting data.",
      "Gained hands-on backend development experience utilizing the Ruby on Rails framework.",
    ],
    color: "#9ece6a" 
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6 bg-[#24283b]">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#9ece6a]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-[#9ece6a]/10 text-[#9ece6a] mb-4">
             <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="mb-4 text-[#c0caf5] text-4xl font-bold tracking-tight">Experience</h2>
          <p className="text-[#9aa5ce] max-w-2xl mx-auto text-lg leading-relaxed">
            Hands-on work that grounded my skills in real-world projects.
          </p>
        </motion.div>

        <div className="space-y-8">
          {EXPERIENCE.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line (Desktop only) */}
              {index !== EXPERIENCE.length - 1 && (
                <div className="hidden md:block absolute left-[1.95rem] top-16 bottom-[-2rem] w-px bg-[#414868]" />
              )}
              
              <div className="relative flex flex-col md:flex-row gap-6 items-start">
                
                {/* KHU VỰC LOGO */}
                <div className="hidden md:flex relative z-10 w-16 h-16 items-center justify-center shrink-0">
                  <div className="absolute inset-0 rounded-full opacity-20 blur-md" style={{ backgroundColor: item.color }} />
                  <img 
                    src={item.logo} 
                    alt={`${item.company} Logo`} 
                    className="w-full h-full object-contain relative z-10" 
                  />
                </div>

                {/* THẺ NỘI DUNG CHÍNH */}
                <div className="flex-1 rounded-2xl border border-[#414868] bg-[#1a1b26] p-6 md:p-8 hover:border-white/20 transition-colors group shadow-lg"
                     style={{ "--hover-color": item.color } as React.CSSProperties}
                     onMouseEnter={(e) => (e.currentTarget.style.borderColor = item.color)}
                     onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#414868")}
                >
                  <div className="md:hidden absolute left-0 top-8 w-1 h-12 rounded-r-full" style={{ backgroundColor: item.color }} />
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div className="flex items-center gap-4 md:block">
                      {/* Logo trên Mobile */}
                      <div className="md:hidden w-12 h-12 shrink-0 relative flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full opacity-20 blur-sm" style={{ backgroundColor: item.color }} />
                        <img src={item.logo} alt="Logo" className="w-full h-full object-contain relative z-10" />
                      </div>
                      
                      <div>
                        <h3 className="text-[#c0caf5] text-2xl font-bold">{item.company}</h3>
                        <p className="text-[#9aa5ce] font-medium mt-1 text-base">
                          {item.role}
                        </p>
                      </div>
                    </div>
                    
                    <div 
                        className="inline-flex px-4 py-1.5 rounded-lg bg-[#24283b] border border-[#414868] text-xs font-mono font-bold tracking-widest shrink-0 h-fit"
                        style={{ color: item.color }}
                    >
                      {item.period}
                    </div>
                  </div>

                  {/* Bullet points mô tả công việc */}
                  <ul className="space-y-3 mt-4 border-t border-[#414868] pt-6">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-4 text-[#9aa5ce] text-sm md:text-base">
                        <span className="mt-0.5 opacity-80" style={{ color: item.color }}>▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
