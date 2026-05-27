import { motion } from "motion/react";
import { Award } from "lucide-react";

const ASSET_BASE = import.meta.env.BASE_URL;

const EDUCATION = [
  {
    id: "hcmut",
    school: "Ho Chi Minh City University of Technology (HCMUT)",
    period: "2023 - 2027",
    degree: "Bachelor of Engineering",
    major: "Computer Science",
    logo: `${ASSET_BASE}01_logobachkhoatoi.png`,
    highlights: [
      "Specializing in Artificial Intelligence and Natural Language Processing.",
      "Top 46 participant in the HCMUT Presentation Contest.",
      "Co-first author on research involving Adaptive Hybrid Filtering for 3D Motion Capture.",
    ],
    color: "#7aa2f7" 
  },
  {
    id: "tran-phu",
    school: "Tran Phu High School",
    period: "2020 - 2023",
    degree: "High School Diploma",
    major: "Science Track",
    logo: `${ASSET_BASE}Logo_THPT_Trần_Phú,_TP.HCM.png`,
    highlights: [
      "Built a strong foundation in Mathematics, Physics, and logic.",
      "Developed an early passion for technology and problem-solving.",
    ],
    color: "#bb9af7" 
  },
];

const CERTIFICATIONS = [
    {
        name: "IELTS Academic",
        date: "03/2025",
        issuer: "British Council"
    },
    {
        name: "Sensor Informatics",
        date: "02/2026",
        issuer: "Kyoto Institute of Technology (KIT)"
    },
     {
        name: "Data Science Program",
        date: "07/2026",
        issuer: "University of Tokyo"
    }
]

export function Education() {
  return (
    <section id="education" className="relative py-24 px-6 bg-[#161925]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7aa2f7]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#c0caf5] text-4xl font-bold tracking-tight">Education & Certifications 🎓</h2>
          <p className="text-[#9aa5ce] max-w-2xl mx-auto text-lg leading-relaxed">
            The academic foundation that drives my passion for AI and Software Engineering.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
            
          <div className="lg:col-span-2 space-y-8">
            {EDUCATION.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative pl-8 md:pl-0"
                >
                  <div className="hidden md:block absolute left-8 top-16 bottom-[-2rem] w-px bg-[#2a2f45]" />
                  
                  <div className="relative flex flex-col md:flex-row gap-6 items-start">
                    
                    {/* BỎ KHUNG, CHỈ ĐỂ LOGO */}
                    <div className="hidden md:flex relative z-10 w-16 h-16 items-center justify-center shrink-0">
                      {/* Thêm một quầng sáng mờ (glow) phía sau logo để nó nổi bật trên nền tối */}
                      <div className="absolute inset-0 rounded-full opacity-20 blur-md" style={{ backgroundColor: item.color }} />
                      <img 
                        src={item.logo} 
                        alt={`${item.school} Logo`} 
                        className="w-full h-full object-contain relative z-10" 
                      />
                    </div>

                    <div className="flex-1 rounded-2xl border border-[#2a2f45] bg-[#1a1b26] p-6 hover:border-[#414868] transition-colors group">
                      <div className="md:hidden absolute left-0 top-6 w-1 h-12 rounded-r-full" style={{ backgroundColor: item.color }} />
                      
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                        <div className="flex items-center gap-3 md:block">
                          {/* SỬA LOGO TRÊN MOBILE (Bỏ khung) */}
                          <div className="md:hidden w-12 h-12 shrink-0 relative flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full opacity-20 blur-sm" style={{ backgroundColor: item.color }} />
                            <img src={item.logo} alt="Logo" className="w-full h-full object-contain relative z-10" />
                          </div>
                          
                          <div>
                            <h3 className="text-[#c0caf5] text-xl font-bold">{item.school}</h3>
                            <p className="text-[#9aa5ce] font-medium mt-1 text-sm md:text-base">
                              {item.degree} in <span className="text-white">{item.major}</span>
                            </p>
                          </div>
                        </div>
                        
                        <div 
                            className="inline-flex px-3 py-1 rounded-lg bg-[#24283b] border border-[#2a2f45] text-xs font-mono font-bold tracking-widest shrink-0 h-fit"
                            style={{ color: item.color }}
                        >
                          {item.period}
                        </div>
                      </div>

                      <ul className="space-y-2 mt-4 border-t border-[#2a2f45] pt-4">
                        {item.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex gap-3 text-[#9aa5ce] text-sm">
                            <span className="text-[#7aa2f7] mt-0.5 opacity-70">▹</span>
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-2xl border border-[#2a2f45] bg-[#1a1b26] p-6 lg:sticky lg:top-24 h-fit"
          >
              <div className="flex items-center gap-3 mb-6 border-b border-[#2a2f45] pb-4">
                  <div className="p-2 rounded-lg bg-[#f7768e]/10 text-[#f7768e]">
                      <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#c0caf5] text-lg font-bold">Certifications & Programs</h3>
              </div>
              
              <div className="space-y-6">
                  {CERTIFICATIONS.map((cert, idx) => (
                      <div key={idx} className="group">
                          <p className="text-[#5a6a8a] text-xs font-mono mb-1">{cert.date}</p>
                          <h4 className="text-[#c0caf5] font-semibold group-hover:text-[#bb9af7] transition-colors">{cert.name}</h4>
                          <p className="text-[#9aa5ce] text-sm mt-0.5">{cert.issuer}</p>
                      </div>
                  ))}
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
