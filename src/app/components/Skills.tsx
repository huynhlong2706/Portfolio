import { motion } from "motion/react";
import { Code2, BrainCircuit, Layout, Database, Wrench } from "lucide-react";

// Dữ liệu Tech Stack dựa trên bảng bạn cung cấp
const TECH_CATEGORIES = [
  {
    title: "Languages",
    icon: Code2,
    color: "#7aa2f7",
    skills: [
      { name: "Python", badge: "https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" },
      { name: "C++", badge: "https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white" },
      { name: "C", badge: "https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=c&logoColor=white" },
      { name: "Java", badge: "https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white" },
      { name: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" },
      { name: "R", badge: "https://img.shields.io/badge/R-276DC3?style=flat-square&logo=r&logoColor=white" },
    ]
  },
  {
    title: "AI & Data",
    icon: BrainCircuit,
    color: "#bb9af7",
    skills: [
      { name: "PyTorch", badge: "https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" },
      { name: "Scikit-Learn", badge: "https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white" },
      { name: "Pandas", badge: "https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white" },
      { name: "NumPy", badge: "https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white" },
      { name: "Matplotlib", badge: "https://img.shields.io/badge/Matplotlib-11557c?style=flat-square&logo=python&logoColor=white" },
      { name: "Streamlit", badge: "https://img.shields.io/badge/Streamlit-FF4B4B?style=flat-square&logo=streamlit&logoColor=white" },
      { name: "Orange", badge: "https://img.shields.io/badge/Orange-FF7A59?style=flat-square" },
    ]
  },
  {
    title: "Web Dev",
    icon: Layout,
    color: "#9ece6a",
    skills: [
      { name: "React", badge: "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" },
      { name: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white" },
      { name: "Ruby on Rails", badge: "https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=flat-square&logo=rubyonrails&logoColor=white" },
    ]
  },
  {
    title: "Databases",
    icon: Database,
    color: "#e0af68",
    skills: [
      { name: "MySQL", badge: "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white" },
      { name: "SQL Server", badge: "https://img.shields.io/badge/SQL_Server-CC292B?style=flat-square&logo=microsoftsqlserver&logoColor=white" },
      { name: "MongoDB", badge: "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" },
    ]
  },
  {
    title: "Tools & Cloud",
    icon: Wrench,
    color: "#f7768e",
    skills: [
      { name: "Git", badge: "https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" },
      { name: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" },
      { name: "VS Code", badge: "https://img.shields.io/badge/VS_Code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white" },
      { name: "PyCharm", badge: "https://img.shields.io/badge/PyCharm-000000?style=flat-square&logo=pycharm&logoColor=white" },
      { name: "Google Colab", badge: "https://img.shields.io/badge/Google_Colab-F9AB00?style=flat-square&logo=googlecolab&logoColor=white" },
      { name: "Jira", badge: "https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=jira&logoColor=white" },
      { name: "Azure", badge: "https://img.shields.io/badge/Azure-0089D6?style=flat-square&logo=microsoftazure&logoColor=white" },
      { name: "DataGrip", badge: "https://img.shields.io/badge/DataGrip-000000?style=flat-square&logo=datagrip&logoColor=white" },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6 bg-[#1a1b26] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2a2f45]/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-[#c0caf5] text-4xl font-bold tracking-tight">Technical Skills 🎯</h2>
          <p className="text-[#9aa5ce] max-w-2xl mx-auto text-lg leading-relaxed">
            My technical toolkit - carefully selected technologies to build robust AI models and scalable web applications.
          </p>
        </motion.div>

        {/* Stack Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TECH_CATEGORIES.map((category, index) => {
            const Icon = category.icon;
            
            // Tính toán class span cho layout đẹp hơn (2 mục cuối chia đôi không gian nếu có 5 mục)
            const isLastTwo = index >= TECH_CATEGORIES.length - 2 && TECH_CATEGORIES.length % 3 !== 0;
            const spanClass = isLastTwo ? "lg:col-span-1 md:col-span-1" : "";
            const flexCenterLastRow = isLastTwo && index === TECH_CATEGORIES.length - 2 ? "lg:col-start-1 lg:ml-[50%]" : "";
            const flexCenterLastRow2 = isLastTwo && index === TECH_CATEGORIES.length - 1 ? "lg:mr-[50%]" : "";

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`flex flex-col bg-[#24283b] border border-[#2a2f45] rounded-2xl p-6 hover:border-[#414868] hover:shadow-xl transition-all group ${spanClass} ${index === 3 ? 'lg:col-start-1 lg:translate-x-1/2' : ''} ${index === 4 ? 'lg:col-start-3 lg:-translate-x-1/2' : ''}`}
                 style={{ 
                    // Tùy chỉnh nhẹ bóng mờ khi hover tương ứng màu category
                    boxShadow: '0 0 0 transparent',
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 10px 30px -10px ${category.color}20`}
                 onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 0 0 transparent'}
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#2a2f45]">
                  <div 
                    className="p-2.5 rounded-xl bg-[#1a1b26] border border-[#2a2f45]"
                  >
                    <Icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-[#c0caf5] text-lg font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="cursor-pointer"
                      title={skill.name}
                    >
                      <img 
                        src={skill.badge} 
                        alt={skill.name} 
                        className="h-7 rounded-sm shadow-sm"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
