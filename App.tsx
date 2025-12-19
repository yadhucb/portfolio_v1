
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  ChevronRight,
  MapPin,
  Cpu,
  Database,
  Layers,
  GraduationCap,
  Server,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from './constants';

const SectionHeader: React.FC<{ title: string; subtitle: string; id?: string }> = ({ title, subtitle, id }) => (
  <div className="mb-12" id={id}>
    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">{title}</h2>
    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"></div>
    <p className="text-gray-400 max-w-2xl">{subtitle}</p>
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold font-heading tracking-tighter">
            <span className="text-blue-500">&lt;</span>
            YADHU.DEV
            <span className="text-purple-500"> /&gt;</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all">
              Connect
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6 border border-blue-500/20">
              <MapPin size={12} /> {PERSONAL_INFO.location}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
              Architecting <br />
              <span className="text-gradient">Backend Systems</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              I'm {PERSONAL_INFO.name}. A Senior Software Engineer specializing in Python/Django architectures for enterprise systems like <strong>AUREX</strong>.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact"
                className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                Let's Talk <ChevronRight size={18} />
              </a>
              <div className="flex items-center gap-2 px-4">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <Github size={20} />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative group hidden lg:block">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative glass p-8 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-2 text-xs text-gray-500 font-mono">architecture_overview.py</div>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <p><span className="text-purple-400">class</span> <span className="text-blue-300">EnterpriseSystem</span>:</p>
                  <p className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-300">optimize_backend</span>(self):</p>
                  <p className="pl-8">self.stack = [<span className="text-orange-300">"Django"</span>, <span className="text-orange-300">"PostgreSQL"</span>]</p>
                  <p className="pl-8">self.infra = [<span className="text-orange-300">"Docker"</span>, <span className="text-orange-300">"AWS"</span>]</p>
                  <p className="pl-8">self.focus = <span className="text-green-300">"High-Performance APIs"</span></p>
                  <p className="text-gray-500 mt-4"># AI Technology Enthusiast Branding</p>
                  <p className="text-blue-400 mt-2">@tech_enthusiast</p>
                  <p><span className="text-purple-400">def</span> <span className="text-blue-300">explore_ai</span>(self):</p>
                  <p className="pl-8"><span className="text-purple-400">return</span> [<span className="text-green-300">"LLMs"</span>, <span className="text-green-300">"Agentic Workflows"</span>]</p>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            id="about-header"
            title="Strategic Summary" 
            subtitle="Expertise in Governance, Risk, and Compliance (GRC) platform architecture and emerging tech."
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                {PERSONAL_INFO.bio}
              </p>
              <p>
                As a technical lead for <strong>AUREX</strong>, I manage high-complexity modules spanning from <strong>microservice transitions</strong> to <strong>granular multi-tenant security hierarchies</strong>. I focus on creating systems that are not just fast, but auditable and inherently secure.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-3 text-white font-semibold mb-4">
                   <GraduationCap className="text-blue-500" />
                   Academic Foundation
                </div>
                <div className="glass p-4 rounded-xl">
                  <div className="text-sm font-bold text-blue-400">Mechanical Engineering (B.Tech)</div>
                  <div className="text-xs text-gray-400">KMCT Engineering College, Kerala</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">3.4Y</h4>
                <p className="text-gray-400 text-sm">Professional Experience</p>
              </div>
              <div className="glass p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">200+</h4>
                <p className="text-gray-400 text-sm">APIs Built</p>
              </div>
              <div className="glass p-6 rounded-xl border-l-4 border-pink-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">AI</h4>
                <p className="text-gray-400 text-sm">Tech Enthusiast</p>
              </div>
              <div className="glass p-6 rounded-xl border-l-4 border-indigo-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">Django</h4>
                <p className="text-gray-400 text-sm">Expert Practitioner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Professional Journey" 
            subtitle="My evolution within Beinex and the AUREX product ecosystem."
          />
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group relative flex flex-col md:flex-row gap-6 md:gap-12 p-8 glass rounded-2xl hover:bg-white/10 transition-all border-l-2 border-blue-500/20 hover:border-blue-500">
                <div className="md:w-1/4">
                  <div className="text-sm font-semibold text-blue-400 mb-1">{exp.period}</div>
                  <h3 className="text-xl font-bold font-heading">{exp.company}</h3>
                  <div className="text-gray-400 text-sm">{exp.role}</div>
                </div>
                <div className="md:w-3/4">
                  <ul className="space-y-3 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded bg-gray-800 text-gray-400 border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Technical Stack" 
            subtitle="The technologies and methodologies I leverage to build production-ready systems."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl text-left hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  {idx === 0 && <Terminal size={24} />}
                  {idx === 1 && <Server size={24} />}
                  {idx === 2 && <Database size={24} />}
                  {idx === 3 && <Cpu size={24} />}
                </div>
                <h3 className="text-lg font-bold mb-4 font-heading">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-white/5 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Selected Projects" 
            subtitle="Showcasing technical depth in ERP, GRC, and high-scale E-commerce."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group glass rounded-2xl overflow-hidden flex flex-col hover:translate-y-[-4px] transition-all duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold text-blue-400 px-2 py-0.5 rounded-md bg-blue-400/10 border border-blue-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-heading">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link">
                    Case Study <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 mb-20 scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center glass p-12 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
          <h2 className="text-4xl font-bold mb-6 font-heading">Let's build something.</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
            I'm currently based in {PERSONAL_INFO.location}. Reach out if you need a specialized Python/Django engineer for your next technical challenge.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20">
              <Mail size={18} /> {PERSONAL_INFO.email}
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-xl glass text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Linkedin size={18} /> LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500 font-heading">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Senior Software Engineer.
          </div>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a 
        href={`mailto:${PERSONAL_INFO.email}`}
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white text-black rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
      >
        <div className="absolute -top-10 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Email Me
        </div>
        <Mail size={22} />
      </a>
    </div>
  );
};

export default App;
