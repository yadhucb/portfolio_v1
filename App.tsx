
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Briefcase, 
  User, 
  Terminal, 
  ChevronRight,
  MessageSquare,
  X,
  Send,
  Cpu
} from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from './constants';
import { ChatMessage } from './types';
import { aiService } from './geminiService';

const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-2 font-heading">{title}</h2>
    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4"></div>
    <p className="text-gray-400 max-w-2xl">{subtitle}</p>
  </div>
);

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m Yadhu\'s AI Assistant. Ask me anything about his work, skills, or experience!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isTyping]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg = inputValue.trim();
    setInputValue('');
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await aiService.sendMessage(userMsg);
    
    setIsTyping(false);
    setChatMessages(prev => [...prev, { role: 'model', text: response }]);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold font-heading tracking-tighter">
            <span className="text-blue-500">&lt;</span>
            YADHU.DEV
            <span className="text-purple-500"> /&gt;</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="bg-blue-600/20 text-blue-400 px-4 py-1.5 rounded-full border border-blue-500/30 hover:bg-blue-600 hover:text-white transition-all">
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-6 border border-blue-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for new projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight">
              Architecting <br />
              <span className="text-gradient">Digital Futures</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              I'm {PERSONAL_INFO.name}, a {PERSONAL_INFO.title} specialized in building high-scale distributed systems and refined user interfaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setIsChatOpen(true)}
                className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                Let's Talk <ChevronRight size={18} />
              </button>
              <div className="flex items-center gap-2 px-4">
                <a href={PERSONAL_INFO.github} target="_blank" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <Github size={20} />
                </a>
                <a href={PERSONAL_INFO.linkedin} target="_blank" className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3 rounded-full glass hover:bg-white/10 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="relative group hidden lg:block">
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             <div className="relative glass p-6 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  <div className="ml-2 text-xs text-gray-500 font-mono">portfolio_v2.ts</div>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <p><span className="text-purple-400">const</span> developer = <span className="text-blue-300">{`{`}</span></p>
                  <p className="pl-4">name: <span className="text-green-300">"{PERSONAL_INFO.name}"</span>,</p>
                  <p className="pl-4">role: <span className="text-green-300">"{PERSONAL_INFO.title}"</span>,</p>
                  <p className="pl-4">skills: [<span className="text-orange-300">"Cloud"</span>, <span className="text-orange-300">"Scaling"</span>, <span className="text-orange-300">"UX"</span>],</p>
                  <p className="pl-4">status: <span className="text-orange-300">"building_awesome_stuff"</span></p>
                  <p><span className="text-blue-300">{`}`}</span>;</p>
                  <p className="text-gray-600 mt-4">// Deploying system...</p>
                  <p className="text-blue-400">developer.executeNextProject();</p>
                </div>
             </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Professional Narrative" 
            subtitle="Bridging the gap between complex backend architectures and intuitive frontend experiences."
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-lg text-gray-300 leading-relaxed space-y-6">
              <p>
                With over {new Date().getFullYear() - 2019} years in the tech ecosystem, I have navigated from high-growth startups to enterprise-level environments, consistently delivering software that balances business objectives with technical excellence.
              </p>
              <p>
                My philosophy centers on <strong>system simplicity</strong> and <strong>atomic design</strong>. I believe the best solutions aren't just powerful, but effortlessly understandable and maintainable.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl border-l-4 border-blue-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">50+</h4>
                <p className="text-gray-400 text-sm">Projects Delivered</p>
              </div>
              <div className="glass p-6 rounded-xl border-l-4 border-purple-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">99.9%</h4>
                <p className="text-gray-400 text-sm">System Uptime</p>
              </div>
              <div className="glass p-6 rounded-xl border-l-4 border-pink-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">10k+</h4>
                <p className="text-gray-400 text-sm">Github Stars</p>
              </div>
              <div className="glass p-6 rounded-xl border-l-4 border-indigo-500">
                <h4 className="text-2xl font-bold mb-1 font-heading">5+</h4>
                <p className="text-gray-400 text-sm">Open Source Libs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Career Trajectory" 
            subtitle="A timeline of professional growth and contributions across various industries."
          />
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group relative flex flex-col md:flex-row gap-6 md:gap-12 p-8 glass rounded-2xl hover:bg-white/5 transition-all">
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Selected Works" 
            subtitle="Engaging digital experiences and robust technical systems built from the ground up."
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
                  <p className="text-gray-400 text-sm mb-6 flex-grow">{project.description}</p>
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link">
                    View Project <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <SectionHeader 
            title="Core Arsenal" 
            subtitle="A technical toolkit refined through years of practical application and continuous learning."
          />
          <div className="grid md:grid-cols-4 gap-6">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="glass p-8 rounded-2xl text-left hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  {idx === 0 && <Code size={24} />}
                  {idx === 1 && <Terminal size={24} />}
                  {idx === 2 && <Cpu size={24} />}
                  {idx === 3 && <User size={24} />}
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

      {/* Contact Section */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center glass p-12 rounded-[2rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -z-10"></div>
          <h2 className="text-4xl font-bold mb-6 font-heading">Ready to start a conversation?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
            I'm currently looking for new opportunities and interesting collaborations. 
            Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
              <Mail size={18} /> Send Message
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="px-8 py-3 rounded-xl glass text-white font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Gemini & React.
          </div>
          <div className="flex items-center gap-6 text-gray-500">
            <a href={PERSONAL_INFO.github} className="hover:text-white transition-colors">Github</a>
            <a href={PERSONAL_INFO.linkedin} className="hover:text-white transition-colors">LinkedIn</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">Email</a>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <div className="absolute -top-12 right-0 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask my AI Assistant
          </div>
          <MessageSquare className="text-white" size={28} />
        </button>
      )}

      {/* AI Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-8 right-8 z-[100] w-[350px] md:w-[400px] h-[500px] glass rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-white/10 animate-in slide-in-from-bottom-4 duration-300">
          {/* Chat Header */}
          <div className="p-4 bg-white/5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                <Terminal size={16} />
              </div>
              <div>
                <div className="text-xs font-bold font-heading">AI Assistant</div>
                <div className="text-[10px] text-green-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsChatOpen(false)}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white/10 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Yadhu..."
              className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
            />
            <button 
              disabled={isTyping}
              className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default App;
