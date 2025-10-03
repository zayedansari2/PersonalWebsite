import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function Portfolio() {
  // Theme is fixed to light mode
  const isDark = false;
  const [activeSection, setActiveSection] = useState("");
  // store section elements; typed as HTMLElement or null
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-zinc-950 text-zinc-100" : "bg-white text-zinc-900"
      } transition-colors duration-300`}
    >
      {/* Navigation Dots */}
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-4">
          {[
            "intro",
            "work",
            "projects",
            "leadership",
            "hobbies",
            "skills",
            "connect",
          ].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? isDark
                    ? "bg-zinc-100"
                    : "bg-zinc-900"
                  : isDark
                  ? "bg-zinc-700 hover:bg-zinc-500"
                  : "bg-zinc-300 hover:bg-zinc-500"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Section */}
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el;
          }}
          className="min-h-screen flex items-center opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div
                  className={`text-sm font-mono tracking-wider ${
                    isDark ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  PORTFOLIO
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                    Zayed
                    <br />
                    <span
                      className={isDark ? "text-zinc-500" : "text-zinc-600"}
                    >
                      Ansari
                    </span>
                  </h1>
                  <a
                    href="mailto:zayedansari112@gmail.com"
                    className={`group px-4 py-2 border rounded-lg transition-all duration-300 hover:shadow-sm text-sm ${
                      isDark
                        ? "border-zinc-800 hover:border-zinc-600"
                        : "border-zinc-300 hover:border-zinc-500"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>Contact</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              <div className="space-y-6 max-w-md">
                <p
                  className={`text-lg sm:text-xl leading-relaxed ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Third-Year Computer Science student at the University of
                  Washington Seattle with experience in
                  <span className={isDark ? "text-zinc-100" : "text-zinc-900"}>
                    {" "}
                    scalable systems
                  </span>
                  ,
                  <span className={isDark ? "text-zinc-100" : "text-zinc-900"}>
                    {" "}
                    full-stack development
                  </span>
                  , and
                  <span className={isDark ? "text-zinc-100" : "text-zinc-900"}>
                    {" "}
                    fine-tuned LLMs
                  </span>
                  .
                </p>

                <div
                  className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for internships
                  </div>
                  <div>Seattle, WA</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div
                  className={`text-sm font-mono ${
                    isDark ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  EDUCATION
                </div>
                <div className="space-y-2">
                  <div>Computer Science Student</div>
                  <div className={isDark ? "text-zinc-400" : "text-zinc-600"}>
                    Paul G Allen School @ University of Washington
                  </div>
                  <div
                    className={`text-xs ${
                      isDark ? "text-zinc-500" : "text-zinc-500"
                    }`}
                  >
                    Graduating June 2027
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div
                  className={`text-sm font-mono ${
                    isDark ? "text-zinc-500" : "text-zinc-600"
                  }`}
                >
                  FOCUS
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "C", "Linux", "Data Structures"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 text-xs border rounded-full transition-colors duration-300 ${
                          isDark
                            ? "border-zinc-800 hover:border-zinc-600"
                            : "border-zinc-300 hover:border-zinc-500"
                        }`}
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Experience Section */}
        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
              <div
                className={`text-sm font-mono ${
                  isDark ? "text-zinc-500" : "text-zinc-600"
                }`}
              >
                2024 — 2025
              </div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "2025",
                  role: "AI / SDE Intern",
                  company: "CionSystems",
                  location: "Redmond, WA, USA",
                  duration: "06/2025 — 09/2025",
                  bullets: [
                    "Fine-tuned open-source LLMs on cybersecurity logs using QLoRA, vLLM, and FlashAttention, cutting inference latency by 35% without loss of accuracy.",
                    "Applied 4-bit quantization to compress model size by 70%, enabling low-latency deployment on resource-constrained systems.",
                    "Integrated the fine-tuned LLM into security workflows, automating threat detection and increasing incident response precision by 25%.",
                  ],
                  tech: [
                    "Python",
                    "QLoRA",
                    "vLLM",
                    "FlashAttention",
                    "4-bit Quantization",
                    "Cybersecurity",
                  ],
                },
                {
                  year: "2024",
                  role: "SDE Intern",
                  company: "HeyMilo AI",
                  location: "New York, NY, USA",
                  duration: "06/2024 — 09/2024",
                  bullets: [
                    "Developed Python modules for a multilingual AI voice agent, enabling automated interviews and improving accessibility for non-English speakers.",
                    "Optimized audio transcription pipelines using NLP libraries, reducing latency by 25% and improving transcription accuracy.",
                    "Deployed AI features in 5+ languages through cross-functional collaboration, boosting global adoption.",
                  ],
                  tech: [
                    "Python",
                    "NLP",
                    "AI",
                    "Voice Processing",
                    "Multilingual AI",
                    "Audio Transcription",
                  ],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className={`group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b transition-colors duration-500 ${
                    isDark
                      ? "border-zinc-800 hover:border-zinc-700"
                      : "border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <div className="lg:col-span-2">
                    <div
                      className={`text-xl sm:text-2xl font-light transition-colors duration-500 ${
                        isDark
                          ? "text-zinc-500 group-hover:text-zinc-100"
                          : "text-zinc-600 group-hover:text-zinc-900"
                      }`}
                    >
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">
                        {job.role}
                      </h3>
                      <div
                        className={isDark ? "text-zinc-400" : "text-zinc-600"}
                      >
                        {job.company}
                      </div>
                      <div
                        className={`text-sm ${
                          isDark ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        {job.location}
                      </div>
                      <div
                        className={`text-xs font-mono ${
                          isDark ? "text-zinc-500" : "text-zinc-500"
                        }`}
                      >
                        {job.duration}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {job.bullets.map((bullet, bulletIndex) => (
                        <p
                          key={bulletIndex}
                          className={`leading-relaxed max-w-lg text-sm ${
                            isDark ? "text-zinc-400" : "text-zinc-600"
                          }`}
                        >
                          • {bullet}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 text-xs rounded transition-colors duration-500 ${
                          isDark
                            ? "text-zinc-500 group-hover:text-zinc-400"
                            : "text-zinc-600 group-hover:text-zinc-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={(el) => {
            sectionsRef.current[2] = el;
          }}
          className="min-h-screen py-20 sm:py-32 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "F1 AI App",
                  description:
                    "Full-stack Formula 1 platform featuring a React/Vite/TypeScript frontend with Tailwind CSS and Python FastAPI backend connected to Supabase PostgreSQL. Built an interactive race calendar that auto-updates race status. Integrated my fine-tuned LLaMA3.2-8B model trained on F1 data using Unsloth for an AI chat interface. Serving 1000+ users with real-time F1 insights and achieving 85% accuracy on F1-specific queries.",
                  tech: [
                    "React",
                    "Vite",
                    "TypeScript",
                    "Tailwind",
                    "FastAPI",
                    "Supabase",
                    "PostgreSQL",
                    "LLaMA3.2",
                  ],
                  category: "Full-Stack",
                  link: "https://f1-app-inky.vercel.app/",
                },
                {
                  title: "Local RAG AI Agent",
                  description:
                    "Built a local Retrieval-Augmented Generation (RAG) agent with Ollama, LangChain, and ChromaDB, enabling offline, cost-free AI inference without external APIs. Implemented semantic search with vector embeddings and achieved 90% accuracy on domain-specific queries while maintaining complete data privacy.",
                  tech: ["Ollama", "LangChain", "ChromaDB", "Python"],
                  category: "AI/ML",
                  link: "https://github.com/zayedansari2/LocalRAGAgent",
                },
                {
                  title: "Secure API Gateway",
                  description:
                    "Built a production-ready API gateway with Node.js/Express implementing JWT authentication, comprehensive logging, rate limiting (100 req/min), and health monitoring. Deployed with CI/CD pipelines and achieved 99.9% uptime with AES-256 encryption for sensitive data.",
                  tech: ["Node.js", "Express", "AES-256", "CI/CD"],
                  category: "Backend",
                  link: "https://secure-api-gateway-f7q4.onrender.com/",
                },
                {
                  title: "Lewis Hamilton 2025 Prediction Model",
                  description:
                    "Designed and trained a machine learning model using Lewis Hamilton's complete career data to predict his finishing position in every Grand Prix of the 2025 season. Built an end-to-end Random Forest regression pipeline with time-series feature engineering, hyperparameter tuning via GridSearchCV, and achieved 78% accuracy.",
                  tech: [
                    "Python",
                    "Random Forest",
                    "GridSearchCV",
                    "Pandas",
                    "Scikit-learn",
                  ],
                  category: "Machine Learning",
                  link: "https://huggingface.co/zayedansari/HamiltonMLModel",
                },
              ].map((project, index) =>
                project.link ? (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block p-6 sm:p-8 border rounded-lg transition-all duration-500 hover:shadow-lg cursor-pointer ${
                      isDark
                        ? "border-zinc-800 hover:border-zinc-600"
                        : "border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    <div className="space-y-4">
                      <div
                        className={`flex items-center justify-between text-xs font-mono ${
                          isDark ? "text-zinc-500" : "text-zinc-600"
                        }`}
                      >
                        <span>{project.category}</span>
                        <svg
                          className="w-4 h-4 transition-colors duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>

                      <h3
                        className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
                          isDark
                            ? "group-hover:text-zinc-400"
                            : "group-hover:text-zinc-600"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`leading-relaxed ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs border rounded-full ${
                              isDark
                                ? "border-zinc-800 text-zinc-500"
                                : "border-zinc-200 text-zinc-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ) : (
                  <article
                    key={index}
                    className={`group p-6 sm:p-8 border rounded-lg transition-all duration-500 hover:shadow-lg cursor-pointer ${
                      isDark
                        ? "border-zinc-800 hover:border-zinc-600"
                        : "border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    <div className="space-y-4">
                      <div
                        className={`flex items-center justify-between text-xs font-mono ${
                          isDark ? "text-zinc-500" : "text-zinc-600"
                        }`}
                      >
                        <span>{project.category}</span>
                      </div>

                      <h3
                        className={`text-lg sm:text-xl font-medium transition-colors duration-300 ${
                          isDark
                            ? "group-hover:text-zinc-400"
                            : "group-hover:text-zinc-600"
                        }`}
                      >
                        {project.title}
                      </h3>

                      <p
                        className={`leading-relaxed ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className={`px-2 py-1 text-xs border rounded-full ${
                              isDark
                                ? "border-zinc-800 text-zinc-500"
                                : "border-zinc-200 text-zinc-600"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* Leadership & Outreach Section */}
        <section
          id="leadership"
          ref={(el) => {
            sectionsRef.current[3] = el;
          }}
          className="py-20 sm:py-32 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">
              Leadership & Outreach
            </h2>

            <div className="space-y-8">
              <div
                className={`p-6 sm:p-8 border rounded-lg ${
                  isDark ? "border-zinc-800" : "border-zinc-200"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-medium">Volunteer</h3>
                    <span
                      className={`text-sm font-mono ${
                        isDark ? "text-zinc-500" : "text-zinc-600"
                      }`}
                    >
                      02/2019 — Present
                    </span>
                  </div>
                  <div
                    className={`text-lg ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    Bait Ul Maal
                  </div>
                  <div className={isDark ? "text-zinc-500" : "text-zinc-500"}>
                    Redmond, Washington
                  </div>
                  <p
                    className={`leading-relaxed ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    Distributed essential supplies (flour, oil, rice) to
                    low-income communities across Seattle, helping families in
                    need and contributing to local food security initiatives.
                    Participated in regular community outreach programs and
                    organized donation drives.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "Community Service",
                      "Nonprofit",
                      "Social Impact",
                      "Team Leadership",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs border rounded-full ${
                          isDark
                            ? "border-zinc-800 text-zinc-500"
                            : "border-zinc-200 text-zinc-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className={`p-6 sm:p-8 border rounded-lg ${
                  isDark ? "border-zinc-800" : "border-zinc-200"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-medium">Volunteer</h3>
                    <span
                      className={`text-sm font-mono ${
                        isDark ? "text-zinc-500" : "text-zinc-600"
                      }`}
                    >
                      09/2019 — 06/2023
                    </span>
                  </div>
                  <div className="text-lg text-zinc-600">MAPS MCRC</div>
                  <div className="text-zinc-500">Redmond, Washington</div>
                  <p className="leading-relaxed text-zinc-600">
                    Volunteered with MAPS MCRC in Redmond, WA, supporting
                    programs that provide essential resources to individuals and
                    families in need. Assisted with community outreach
                    initiatives, coordinated donation drives, and helped connect
                    underserved groups with food, housing, and social services.
                    Collaborated with diverse teams to expand the organization’s
                    impact and strengthen community engagement.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {[
                      "Team Player",
                      "Leadership",
                      "Time Management",
                      "Discipline",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs border rounded-full ${
                          isDark
                            ? "border-zinc-800 text-zinc-500"
                            : "border-zinc-200 text-zinc-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hobbies Section */}
        <section
          id="hobbies"
          ref={(el) => {
            sectionsRef.current[4] = el;
          }}
          className="py-20 sm:py-32 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">
              Hobbies & Interests
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
              {[
                {
                  icon: "🏀",
                  title: "Basketball",
                  description:
                    "Playing and watching basketball, following NBA and college games. Former 4-year high school player with a passion for the game.",
                },
                {
                  icon: "🏎️",
                  title: "Formula 1",
                  description:
                    "Avid F1 fan and data enthusiast. Built an AI app dedicated to F1 analytics and predictions, combining my love for racing with machine learning.",
                },
                {
                  icon: "💻",
                  title: "Open Source",
                  description:
                    "Contributing to open-source projects and sharing AI models on HuggingFace and Ollama. Passionate about making technology accessible to everyone.",
                },
                {
                  icon: "🤖",
                  title: "AI & ML",
                  description:
                    "Experimenting with LLMs, fine-tuning models, and exploring new AI technologies. Always learning about the latest developments in machine learning.",
                },
                // removed Tech Blogs and Gaming per user's request
              ].map((hobby, index) => (
                <div
                  key={index}
                  className={`p-6 border rounded-lg transition-all duration-300 hover:shadow-lg ${
                    isDark
                      ? "border-zinc-800 hover:border-zinc-600"
                      : "border-zinc-200 hover:border-zinc-400"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="text-4xl">{hobby.icon}</div>
                    <h3 className="text-lg font-medium">{hobby.title}</h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDark ? "text-zinc-400" : "text-zinc-600"
                      }`}
                    >
                      {hobby.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          ref={(el) => {
            sectionsRef.current[5] = el;
          }}
          className="py-20 sm:py-32 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">
              Technical Skills
            </h2>

            <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">
              {[
                {
                  category: "Languages",
                  skills: [
                    "Python",
                    "Java",
                    "JavaScript",
                    "TypeScript",
                    "C",
                    "HTML/CSS",
                    "x86 Assembly",
                  ],
                },
                {
                  category: "Frameworks & Libraries",
                  skills: [
                    "React",
                    "Next.js",
                    "Vite",
                    "Tailwind CSS",
                    "FastAPI",
                    "Node.js",
                    "Express",
                    "LangChain",
                  ],
                },
                {
                  category: "AI/ML & Data",
                  skills: [
                    "Transformers",
                    "LoRA/PEFT",
                    "vLLM",
                    "FlashAttention",
                    "RAG",
                    "Ollama",
                    "ChromaDB",
                    "Supabase",
                  ],
                },
                {
                  category: "Tools & Concepts",
                  skills: [
                    "Docker",
                    "Git",
                    "GitHub Actions",
                    "Linux/Unix",
                    "CI/CD",
                    "Caching",
                    "Vector Databases",
                  ],
                },
              ].map((skillGroup, index) => (
                <div key={index} className="space-y-4">
                  <h3
                    className={`text-lg font-medium font-mono ${
                      isDark ? "text-zinc-500" : "text-zinc-600"
                    }`}
                  >
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-3 py-2 text-sm border rounded-lg transition-colors duration-300 ${
                          isDark
                            ? "border-zinc-800 hover:border-zinc-600"
                            : "border-zinc-200 hover:border-zinc-400"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[6] = el;
          }}
          className="py-20 sm:py-32 opacity-0 translate-y-8 transition-all duration-700"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p
                  className={`text-lg sm:text-xl leading-relaxed ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Always interested in new opportunities, collaborations, and
                  conversations about technology and AI.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:zayedansari112@gmail.com"
                    className="inline-flex items-center gap-3 px-4 py-2 bg-zinc-900 text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div
                className={`text-sm font-mono ${
                  isDark ? "text-zinc-500" : "text-zinc-600"
                }`}
              >
                ELSEWHERE
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "GitHub",
                    handle: "@zayedansari2",
                    url: "https://github.com/zayedansari2",
                  },
                  {
                    name: "LinkedIn",
                    handle: "zayed-ansari",
                    url: "https://linkedin.com/in/zayed-ansari-25041a261",
                  },
                  {
                    name: "Resume",
                    handle: "View PDF",
                    url: "https://drive.google.com/file/d/1ZGSG2m-CGPVwFy6iTM_VrqAKVIl3euOJ/view?usp=sharing",
                  },
                  {
                    name: "University",
                    handle: "UW Seattle",
                    url: "https://www.cs.washington.edu/",
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-4 border rounded-lg transition-all duration-300 hover:shadow-sm ${
                      isDark
                        ? "border-zinc-800 hover:border-zinc-600"
                        : "border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    <div className="space-y-2">
                      <div
                        className={`transition-colors duration-300 ${
                          isDark
                            ? "group-hover:text-zinc-400"
                            : "group-hover:text-zinc-600"
                        }`}
                      >
                        {social.name}
                      </div>
                      <div
                        className={`text-sm ${
                          isDark ? "text-zinc-400" : "text-zinc-600"
                        }`}
                      >
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`py-12 sm:py-16 border-t ${
            isDark ? "border-zinc-800" : "border-zinc-200"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div
                className={`text-sm ${
                  isDark ? "text-zinc-500" : "text-zinc-600"
                }`}
              >
                © 2025 Zayed Ansari. All rights reserved.
              </div>
            </div>

            <div />
          </div>
        </footer>
      </main>

      {/* removed bottom glow to ensure clean white footer */}
    </div>
  );
}
