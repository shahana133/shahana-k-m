import "../styles/navbar.css"

function Navbar(){
  return(

    <nav className="navbar">

      <div className="nav-container">

        <div className="logo">
          SHAHANA K.M.
        </div>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="cv-btn">Download CV</button>

      </div>

    </nav>

  )
}

export default Navbar