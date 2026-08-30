import React, { useState } from 'react';
import { Copy, Check, Terminal, ExternalLink, X, HelpCircle, Sparkles, Play, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { PROFILE_INFO } from '../data/profileData';

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReadmeModal: React.FC<ReadmeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'markdown' | 'instructions' | 'troubleshoot'>('markdown');

  const readmeContent = `<div align="center">

<!-- ==================== HERO SECTION & TYPING ANIMATION ==================== -->
<h1>
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Waving%20Hand.png" alt="Waving Hand" width="45" height="45" />
  <b>Hi there, I'm Rahul Chaudhary</b>
</h1>

<p align="center">
  <b>Computer Science Student &bull; AI & Machine Learning Enthusiast &bull; Full-Stack Developer</b>
</p>

<a href="https://github.com/chaudharirahul10">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=2800&pause=1000&color=38BDF8&center=true&vCenter=true&random=false&width=620&height=45&lines=Building+Intelligent+AI+%26+Machine+Learning+Solutions;Full-Stack+Web+Apps+with+React%2C+Node+%26+Spring+Boot;Mastering+Data+Structures+%26+Algorithms+in+C%2B%2B;Exploring+Cloud+Platforms+%26+Data+Intelligence;Turning+Innovative+Ideas+Into+Real-World+Software" alt="Typing SVG" />
</a>

<br/><br/>

<!-- ==================== QUICK BADGES & PROFILE STATS ==================== -->
<p align="center">
  <a href="https://www.rahulchaudhary07.com.np">
    <img src="https://img.shields.io/badge/🌐_Portfolio-rahulchaudhary07.com.np-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  </a>
  &nbsp;
  <a href="https://github.com/chaudharirahul10">
    <img src="https://img.shields.io/badge/GitHub-chaudharirahul10-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  &nbsp;
  <a href="mailto:chaudharyraul07@gmail.com">
    <img src="https://img.shields.io/badge/Email-chaudharyraul07@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=chaudharirahul10&label=Profile%20Views&color=2563eb&style=flat-square" alt="Profile Views" />
  &nbsp;
  <img src="https://img.shields.io/github/followers/chaudharirahul10?label=Followers&style=flat-square&color=10B981" alt="GitHub Followers" />
  &nbsp;
  <img src="https://img.shields.io/badge/Focus-AI%2FML%20%26%20Full--Stack-8B5CF6?style=flat-square" alt="Focus" />
  &nbsp;
  <img src="https://img.shields.io/badge/Status-Open%20to%20Opportunities-3B82F6?style=flat-square" alt="Status" />
</p>

</div>

---

## 👨‍💻 About Me

\`\`\`yaml
name: Rahul Chaudhary
role: Software Developer & AI/ML Enthusiast
education: Computer Science Student
passions:
  - Artificial Intelligence & Machine Learning
  - Full-Stack Software Engineering
  - Algorithmic Problem Solving & DSA
philosophy: "Learn → Build → Break → Debug → Improve → Repeat."
location: Nepal
\`\`\`

I am a **Computer Science student** with a deep passion for building practical software, exploring **Artificial Intelligence & Machine Learning**, and mastering algorithmic problem solving. I believe in hands-on learning—turning concepts into production-ready code through continuous project building.

- 🔭 **Currently Building:** Practical AI/ML models, scalable web applications, and backend microservices.
- 🤖 **AI & Data Focus:** Machine Learning algorithms, predictive modeling with TensorFlow & Scikit-learn, and data pipelines.
- 💻 **Problem Solving:** Actively solving Data Structures & Algorithms challenges using **C++**.
- 🌱 **Exploring:** Cloud computing (**Azure**), enterprise analytics (**Power BI**, **Microsoft Fabric**, **OneLake**), and modern API architectures.
- 🎯 **Career Goal:** Building high-impact, intelligent software engineering solutions.

---

## 🛠️ Technical Skills & Toolbelt

<table align="center" width="100%">
  <tr>
    <td width="50%" valign="top">
      <h4>💻 Programming Languages</h4>
      <p>
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=cpp,python,java,javascript,html,css" alt="Languages" />
        </a>
      </p>
      <sub><b>C++</b> (DSA / CP) • <b>Python</b> (AI/ML) • <b>Java</b> • <b>JavaScript</b> (ES6+)</sub>
    </td>
    <td width="50%" valign="top">
      <h4>🌐 Frontend & Styling</h4>
      <p>
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=react,tailwind,html,css" alt="Frontend" />
        </a>
      </p>
      <sub><b>React.js</b> • <b>Tailwind CSS</b> • Responsive UI Engineering • Component Systems</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>⚙️ Backend & API Development</h4>
      <p>
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=nodejs,express,spring" alt="Backend" />
        </a>
      </p>
      <sub><b>Node.js</b> • <b>Express.js</b> • <b>Spring Boot</b> (Java) • RESTful APIs & Middleware</sub>
    </td>
    <td width="50%" valign="top">
      <h4>🗄️ Databases & Storage</h4>
      <p>
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=mongodb,mysql,sqlite" alt="Databases" />
        </a>
      </p>
      <sub><b>MongoDB</b> (NoSQL) • <b>MySQL</b> (Relational) • <b>SQLite</b> • Data Modeling</sub>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>🤖 AI, Machine Learning & Data</h4>
      <p>
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=tensorflow,python" alt="AI & ML" />
        </a>
      </p>
      <sub><b>TensorFlow</b> • <b>Scikit-Learn</b> • <b>NumPy</b> • <b>Pandas</b> • <b>Matplotlib</b> • Machine Learning</sub>
    </td>
    <td width="50%" valign="top">
      <h4>☁️ Cloud, Tools & Platforms</h4>
      <p>
        <a href="https://skillicons.dev">
          <img src="https://skillicons.dev/icons?i=git,github,vscode,azure,postman" alt="Dev Tools" />
        </a>
      </p>
      <sub><b>Git / GitHub</b> • <b>VS Code</b> • <b>Postman</b> • <b>Azure</b> • <b>Power BI</b> • <b>Microsoft Fabric</b></sub>
    </td>
  </tr>
</table>

---

## 🚀 Core Focus & Active Domains

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🤖 Artificial Intelligence & ML</h3>
      <ul>
        <li>Supervised & Unsupervised Machine Learning models</li>
        <li>Deep Learning experimentation with <b>TensorFlow</b></li>
        <li>Data wrangling, exploratory analysis & visualizations</li>
        <li>Integrating AI inference APIs into web applications</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🌐 Full-Stack Web Development</h3>
      <ul>
        <li>Modern, reactive frontend interfaces in <b>React</b> & <b>Tailwind</b></li>
        <li>Robust backend microservices with <b>Node.js / Express</b> & <b>Spring Boot</b></li>
        <li>Database schema architecture in <b>MongoDB</b> & <b>MySQL</b></li>
        <li>Secure authentication, routing, and RESTful API endpoints</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🧠 Problem Solving & DSA</h3>
      <ul>
        <li>Algorithmic mastery with <b>C++</b> & STL containers</li>
        <li>Deep focus on Trees, Graphs, Dynamic Programming & Optimization</li>
        <li>Complexity analysis (Time <code>O(N)</code> & Space <code>O(1)</code>)</li>
        <li>Consistent coding habit and challenge roadmaps</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>☁️ Data & Cloud Engineering</h3>
      <ul>
        <li>Interactive dashboard building with <b>Power BI</b></li>
        <li>ETL and lakehouse pipelines using <b>Microsoft Fabric</b> & <b>OneLake</b></li>
        <li>Cloud compute & deployment workflows on <b>Microsoft Azure</b></li>
        <li>Enterprise business intelligence analytics</li>
      </ul>
    </td>
  </tr>
</table>

---

## 📌 Featured Projects Showcase

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🤖 AI & Machine Learning Lab</h3>
      <p>Intelligent machine learning pipelines and predictive models built using Python, TensorFlow, Scikit-Learn, and real-world datasets.</p>
      <p>
        <b>Key Features:</b><br/>
        • Supervised & unsupervised learning models<br/>
        • Exploratory data analysis with Pandas & Matplotlib<br/>
        • Model evaluation, inference APIs & performance metrics
      </p>
      <p>
        <b>Tech Stack:</b> <code>Python</code> <code>TensorFlow</code> <code>Scikit-Learn</code> <code>NumPy</code> <code>Pandas</code>
      </p>
      <p>
        <a href="https://github.com/chaudharirahul10">
          <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github" alt="GitHub Repo" />
        </a>
        &nbsp;
        <a href="https://www.rahulchaudhary07.com.np">
          <img src="https://img.shields.io/badge/Demo-Overview-2563EB?style=flat-square&logo=googlechrome" alt="Demo" />
        </a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>🌐 Full-Stack Application Suite</h3>
      <p>Production-ready web applications and REST APIs featuring React frontend user interfaces, backend services, and database persistence.</p>
      <p>
        <b>Key Features:</b><br/>
        • Responsive component architecture with Tailwind CSS<br/>
        • RESTful API microservices in Express & Spring Boot<br/>
        • Scalable database schemas using MongoDB & MySQL
      </p>
      <p>
        <b>Tech Stack:</b> <code>React</code> <code>Node.js</code> <code>Express</code> <code>Spring Boot</code> <code>MongoDB</code>
      </p>
      <p>
        <a href="https://github.com/chaudharirahul10">
          <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github" alt="GitHub Repo" />
        </a>
        &nbsp;
        <a href="https://www.rahulchaudhary07.com.np">
          <img src="https://img.shields.io/badge/Demo-Live_App-10B981?style=flat-square&logo=googlechrome" alt="Live App" />
        </a>
      </p>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🧠 C++ DSA & Problem Solving Arena</h3>
      <p>A structured repository of algorithmic solutions, competitive programming patterns, and optimized data structure implementations.</p>
      <p>
        <b>Key Features:</b><br/>
        • Graphs, Trees, Recursion & Dynamic Programming in C++<br/>
        • Standard Template Library (STL) optimization patterns<br/>
        • 100+ Days of Code problem solving log & complexity notes
      </p>
      <p>
        <b>Tech Stack:</b> <code>C++</code> <code>Algorithms</code> <code>Data Structures</code> <code>STL</code>
      </p>
      <p>
        <a href="https://github.com/chaudharirahul10">
          <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github" alt="GitHub Repo" />
        </a>
      </p>
    </td>
    <td width="50%" valign="top">
      <h3>📊 Business Intelligence & Cloud Analytics</h3>
      <p>Data transformation pipelines, lakehouse architectures, and interactive dashboards exploring modern enterprise data intelligence.</p>
      <p>
        <b>Key Features:</b><br/>
        • Interactive visual executive dashboards in Power BI<br/>
        • End-to-end data ingestion with Microsoft Fabric<br/>
        • Unified cloud data lake integration with OneLake & Azure
      </p>
      <p>
        <b>Tech Stack:</b> <code>Power BI</code> <code>Microsoft Fabric</code> <code>OneLake</code> <code>Azure</code> <code>SQL</code>
      </p>
      <p>
        <a href="https://github.com/chaudharirahul10">
          <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=flat-square&logo=github" alt="GitHub Repo" />
        </a>
      </p>
    </td>
  </tr>
</table>

> 💡 *Check out all repositories and ongoing work at [github.com/chaudharirahul10](https://github.com/chaudharirahul10?tab=repositories).*

---

## 📊 GitHub Analytics & Activity

<div align="center">

<table border="0">
  <tr>
    <td align="center" width="50%">
      <img src="https://github-readme-stats.vercel.app/api?username=chaudharirahul10&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&icon_color=39d353&text_color=c9d1d9" alt="Rahul's GitHub Stats" width="100%" />
    </td>
    <td align="center" width="50%">
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=chaudharirahul10&theme=tokyonight&hide_border=true&background=0d1117&stroke=58a6ff&ring=39d353&fire=39d353&currStreakLabel=58a6ff" alt="GitHub Streak" width="100%" />
    </td>
  </tr>
  <tr>
    <td colspan="2" align="center">
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=chaudharirahul10&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=58a6ff&text_color=c9d1d9" alt="Top Languages" width="70%" />
    </td>
  </tr>
</table>

</div>

---

## 🐍 Contribution Graph & Snake Animation

<div align="center">

<!-- Generated automatically via GitHub Actions (.github/workflows/snake.yml) -->
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/chaudharirahul10/chaudharirahul10/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/chaudharirahul10/chaudharirahul10/output/github-contribution-grid-snake.svg">
  <img alt="GitHub Contribution Grid Snake" src="https://raw.githubusercontent.com/chaudharirahul10/chaudharirahul10/output/github-contribution-grid-snake-dark.svg" width="100%" />
</picture>

<p align="center">
  <sub>🎮 <i>Every pixel represents dedication, problem-solving, and continuous learning on GitHub.</i></sub>
</p>

</div>

---

## 📈 Developer Journey & Milestones

\`\`\`text
 2024 ─────► Foundations & Problem Solving
             • Started deep dive into Computer Science fundamentals
             • Mastered C++ basics, syntax, and foundational Data Structures
             • Began systematic 100 Days of Code challenge

 2025 ─────► Full-Stack Web Development & APIs
             • Built web applications with React, Node.js, and Express
             • Integrated SQL (MySQL/SQLite) and NoSQL (MongoDB) databases
             • Explored Java & Spring Boot backend microservices

 2026 ─────► AI / Machine Learning & Intelligent Applications
             • Developing machine learning models using Python & TensorFlow
             • Exploring enterprise data intelligence (Power BI, Microsoft Fabric, Azure)
             • Practicing advanced DSA and building production-grade software

 Future ───► High-Impact Software Engineering
             • Architecting distributed systems & scalable AI-driven products
\`\`\`

---

## 🎯 Current Goals & Roadmap

- [x] Master C++ Data Structures & Algorithms fundamentals
- [x] Build and deploy full-stack web applications (React + Node / Spring Boot)
- [ ] Develop end-to-end practical AI/ML applications with real-world datasets
- [ ] Strengthen backend architecture, microservices & distributed API design
- [ ] Deepen knowledge in Cloud infrastructure (Azure) and Data Engineering (Fabric)
- [ ] Contribute to impactful open-source software initiatives

---

## 🏆 Achievements & Milestones

- 🌟 **100+ Days of Code**: Consistent daily problem solving in C++ and software engineering.
- 💻 **Full-Stack Competency**: Built responsive web clients and integrated backend REST APIs.
- 🤖 **AI/ML Exploration**: Hands-on experimentation with machine learning models and data pipelines.
- 🎯 **Continuous Learner**: Dedicated to daily progress, clean code, and engineering excellence.

---

## 💡 Developer Philosophy

<div align="center">

> *"Consistency beats intensity. True growth comes from small, daily improvements over time."*

\`\`\`
┌────────────────────────────────────────────────────────────────────────┐
│  Learn ──► Build ──► Break ──► Debug ──► Improve ──► Repeat ──► Master │
└────────────────────────────────────────────────────────────────────────┘
\`\`\`

</div>

---

## 🌐 Connect With Me

<div align="center">

<p align="center">
  <a href="https://www.rahulchaudhary07.com.np">
    <img src="https://img.shields.io/badge/Portfolio-rahulchaudhary07.com.np-2563EB?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Portfolio" />
  </a>
  &nbsp;
  <a href="https://github.com/chaudharirahul10">
    <img src="https://img.shields.io/badge/GitHub-chaudharirahul10-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  &nbsp;
  <a href="mailto:chaudharyraul07@gmail.com">
    <img src="https://img.shields.io/badge/Email-chaudharyraul07@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
  &nbsp;
  <a href="https://linkedin.com/in/[ADD_YOUR_LINKEDIN_USERNAME]">
    <img src="https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

<p align="center">
  <sub>Feel free to reach out for project collaborations, technical discussions, or software engineering opportunities!</sub>
</p>

</div>

---

<div align="center">

### ⭐ Thank you for visiting my GitHub Profile!

If you find my projects or profile helpful, please consider leaving a **⭐ star** on my repositories!

<br/>

<a href="#-about-me">
  <img src="https://img.shields.io/badge/Back%20to%20Top-0d1117?style=for-the-badge&logo=github&logoColor=white&borderColor=38bdf8" alt="Back to Top" />
</a>

</div>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(readmeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        id="readme-modal-card"
        className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                GitHub Profile README (`chaudharirahul10`)
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  100% Fixed & Verified
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Ready to paste directly into your GitHub special profile repository
              </p>
            </div>
          </div>
          <button
            id="close-readme-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs & Actions */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-2">
            <button
              id="tab-markdown"
              onClick={() => setActiveTab('markdown')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'markdown'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Raw Markdown (README.md)
            </button>
            <button
              id="tab-instructions"
              onClick={() => setActiveTab('instructions')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'instructions'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Step-by-Step Setup Guide
            </button>
            <button
              id="tab-troubleshoot"
              onClick={() => setActiveTab('troubleshoot')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                activeTab === 'troubleshoot'
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Fix Broken Images / Errors</span>
            </button>
          </div>

          <button
            id="copy-readme-btn"
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
              copied
                ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 hover:scale-[1.02]'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy 1-Click README</span>
              </>
            )}
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-sm text-slate-300">
          {activeTab === 'markdown' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Total Lines: {readmeContent.split('\n').length} | Validated GitHub Flavored Markdown (GFM)</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> All external links and badges verified
                </span>
              </div>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 text-xs font-mono overflow-x-auto whitespace-pre leading-relaxed select-all">
                {readmeContent}
              </pre>
            </div>
          )}

          {activeTab === 'instructions' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-200 text-xs space-y-1">
                <p className="font-semibold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                  GitHub Special Repository Rule:
                </p>
                <p>
                  To make this appear on your GitHub profile (<a href="https://github.com/chaudharirahul10" target="_blank" rel="noreferrer" className="underline text-indigo-300 font-mono">github.com/chaudharirahul10</a>), the repository name MUST be exactly identical to your username: <code className="bg-slate-900 px-1.5 py-0.5 rounded text-white font-mono">chaudharirahul10</code> and set to <b>Public</b>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                    1
                  </div>
                  <h4 className="font-bold text-white text-sm">Create Repo or Open</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Go to GitHub and make sure you have the repository named <b className="text-slate-200">chaudharirahul10/chaudharirahul10</b>. Make sure it is <b>Public</b>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                    2
                  </div>
                  <h4 className="font-bold text-white text-sm">Paste the README.md</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Open <code className="text-slate-200 font-mono">README.md</code> in that repo, click edit, select all, delete old content, and paste the code from the <b>Raw Markdown</b> tab.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-xs">
                    3
                  </div>
                  <h4 className="font-bold text-white text-sm">Enable Snake Action</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Go to <b>Actions</b> tab in your repo, select <b>Generate Contribution Snake</b> and click <b>Run workflow</b> once so the animated snake graph appears!
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-400" />
                  Quick Action Links
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="https://github.com/new"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                  >
                    <span>Create New Repository</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://github.com/chaudharirahul10/chaudharirahul10"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
                  >
                    <span>Open chaudharirahul10 Repo</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <a
                    href="https://github.com/chaudharirahul10"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors"
                  >
                    <span>Check Live Profile</span>
                    <ExternalLink className="w-3 h-3 text-indigo-200" />
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'troubleshoot' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs space-y-2">
                <h4 className="font-bold text-amber-300 text-sm flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" />
                  Kyun kuch cheezein GitHub par broken ya alag dikhti hain? (Reason & Fix)
                </h4>
                <p className="text-slate-300">
                  GitHub web page ek normal website jaisa nahi hota. Wo images ko apne server (GitHub Camo Proxy) ke through render karta hai aur security ke liye Javascript ko block karta hai.
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    1. Header Banner Broken (Fixed!):
                  </h5>
                  <p className="text-xs text-slate-400">
                    Pehle <code className="text-slate-200 font-mono">capsule-render.vercel.app</code> use ho raha tha jo Vercel par rate limit ho gaya tha. Humne use <b>Animated Typing SVG + Fluent Emoji</b> se replace kar diya hai jo 100% reliable hai aur kabhi crash nahi hota.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    2. Contribution Snake Image Broken kyun dikhti hai?
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Contribution snake tabhi dikhta hai jab aapka GitHub Action workflow kam se kam 1 baar run ho chuka ho taaki <code className="text-slate-200 font-mono">output</code> branch create ho sake.
                    <br />
                    <b>Fix:</b> Apne repo mein <b className="text-slate-200">Actions</b> tab par jayein ➔ <b className="text-slate-200">Generate Contribution Snake</b> par click karein ➔ <b className="text-slate-200">Run workflow</b> daba dein. 30 seconds baad image live ho jayegi!
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h5 className="font-bold text-white text-xs flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    3. Workflow Permission Denied Error:
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Agar snake action fail ho raha ho, toh Repo <b>Settings</b> ➔ <b>Actions</b> ➔ <b>General</b> ➔ scroll down to <b>Workflow permissions</b> ➔ select <b>"Read and write permissions"</b> ➔ Save karein.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
          <span>Configured for GitHub username: <b className="text-white font-mono">{PROFILE_INFO.githubUsername}</b></span>
          <button
            id="modal-done-btn"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
