import "../styles/global.css"

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div className="about-text">
          <p>
            I am a Full Stack Developer with experience in Python, Django,
            React, HTML, CSS and JavaScript. I enjoy building modern and
            responsive websites.
          </p>

          <p>
            I have worked on projects like a Rice Export Website and a
            Spare Parts Website using modern web technologies.
          </p>

            <a href="/Shahana_CV.pdf" download>
             <button className="cv-btn">Download CV</button>
            </a>
        </div>

        <div className="about-cards">

          <div className="about-card">
            <h3>2+</h3>
            <p>Projects</p>
          </div>

          <div className="about-card">
            <h3>Python</h3>
            <p>Django Developer</p>
          </div>

          <div className="about-card">
            <h3>React</h3>
            <p>Frontend Developer</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About