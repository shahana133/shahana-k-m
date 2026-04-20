import SkillCard from "../components/Skillcard";

function Skills() {
  const skills = [
    "Python",
    "Django",
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="skills">  {/* <-- Added id */}

      <h2>My Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill} />
        ))}
      </div>

    </section>
  );
}

export default Skills;