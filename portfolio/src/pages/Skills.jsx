function Skills() {
  const skills = [
    "HTML",
    "CSS",
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
  ];

  return (
    <section className="page">
      <h1>My Skills</h1>

      <div className="skills">
        {skills.map((skill) => (
          <div className="skill" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
