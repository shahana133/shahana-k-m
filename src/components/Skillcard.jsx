import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa"
import { SiDjango, SiJavascript, SiBootstrap, SiMysql, SiGithub } from "react-icons/si"

function SkillCard({ name }) {

  const icons = {
    Python: <FaPython />,
    Django: <SiDjango />,
    React: <FaReact />,
    JavaScript: <SiJavascript />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
    Bootstrap: <SiBootstrap />,
    MySQL: <SiMysql />,
    Git: <FaGitAlt />,
    GitHub: <SiGithub />
  }

  return (
    <div className="skill-card">

      <div className="skill-icon">
        {icons[name]}
      </div>

      <h3>{name}</h3>

    </div>
  )
}

export default SkillCard