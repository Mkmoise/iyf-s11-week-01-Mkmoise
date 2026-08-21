import "./App.css";

const projects = [
  {
    title: "StreetVendorHub",
    category: "Full-Stack Web Application",
    description:
      "A platform designed to help street vendors showcase their businesses and connect with customers.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    link: "#",
  },
  {
    title: "CommunityHub",
    category: "React Application",
    description:
      "A multi-page community application built with React, React Router, reusable components, API data fetching and custom hooks.",
    tech: ["React", "React Router", "Vite", "JavaScript", "REST API"],
    link: "#",
  },
  {
    title: "Mongoose Database Practice",
    category: "Backend & Database",
    description:
      "Backend practice focused on connecting Node.js applications with MongoDB using Mongoose and working with database models.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose"],
    link: "#",
  },
  {
    title: "React Components Project",
    category: "Frontend Development",
    description:
      "A React project built with reusable components including cards, navigation, buttons, posts, sidebars and todo functionality.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    link: "#",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "React Router",
  "Vite",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive Design",
];

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo">
          MK<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm <span>Moise Nyarugabo</span>
            </h1>

            <h2>Frontend Developer & Digital Marketing Enthusiast</h2>

            <p className="hero-text">
              I build modern, responsive and user-friendly web applications
              while continuously developing my skills in software development,
              backend technologies and digital marketing.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn primary">
                View My Projects
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="profile-circle">MN</div>
            <h3>Moise Nyarugabo</h3>
            <p>Developer • Learner • Creator</p>

            <div className="code-window">
              <span>&lt;developer&gt;</span>
              <span>Building the future</span>
              <span>one project at a time.</span>
              <span>&lt;/developer&gt;</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <p>ABOUT ME</p>
            <h2>Turning ideas into digital experiences</h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                My name is <strong>Moise Nyarugabo</strong>. I am a passionate
                technology learner focused on web development, digital
                marketing and IT.
              </p>

              <p>
                My development journey has given me practical experience
                working with HTML, CSS, JavaScript, React, Node.js, Express,
                MongoDB and Git/GitHub.
              </p>

              <p>
                I enjoy solving problems, learning new technologies and
                building practical applications that can solve real-world
                problems.
              </p>

              <p>
                I am currently expanding my skills in full-stack development
                while also developing my knowledge of digital entrepreneurship
                and marketing.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <strong>12+</strong>
                <span>Technologies</span>
              </div>

              <div className="stat">
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div className="stat">
                <strong>∞</strong>
                <span>Things to Learn</span>
              </div>

              <div className="stat">
                <strong>1</strong>
                <span>Goal: Keep Building</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <p>MY SKILLS</p>
            <h2>Technologies I work with</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill" key={skill}>
                <span>◆</span>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <p>MY WORK</p>
            <h2>Featured Projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a href={project.link} className="project-link">
                  View Project →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey-section">
          <div className="section-heading">
            <p>MY JOURNEY</p>
            <h2>From learning the basics to building full-stack apps</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span>01</span>
              <div>
                <h3>Web Foundations</h3>
                <p>
                  Learned the fundamentals of HTML, CSS, responsive design,
                  Flexbox and CSS Grid.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>02</span>
              <div>
                <h3>JavaScript</h3>
                <p>
                  Developed my understanding of JavaScript fundamentals,
                  programming logic and browser interaction.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>03</span>
              <div>
                <h3>React Development</h3>
                <p>
                  Started building component-based applications with React,
                  Vite, React Router, hooks and API integration.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>04</span>
              <div>
                <h3>Backend Development</h3>
                <p>
                  Progressed into Node.js, Express, REST APIs, MongoDB,
                  Mongoose, authentication and full-stack applications.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span>05</span>
              <div>
                <h3>Full-Stack Projects</h3>
                <p>
                  Currently applying these skills to real projects such as
                  StreetVendorHub.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-content">
            <p className="eyebrow">LET'S CONNECT</p>

            <h2>Have a project or opportunity?</h2>

            <p>
              I'm always interested in learning, building and connecting with
              people who are passionate about technology.
            </p>

            <div className="contact-buttons">
              <a
                href="https://github.com/Mkmoise"
                target="_blank"
                rel="noreferrer"
                className="btn primary"
              >
                GitHub
              </a>

              <a
                href="mkmoise920@gmail.com"
                className="btn secondary"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>MK<span>.</span></strong>
          <p>Building. Learning. Growing.</p>
        </div>

        <p>© 2026 Moise Nyarugabo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
