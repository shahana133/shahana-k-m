import "../styles/hero.css"

function Hero() {
  return (
    <section id="home" className="hero">  {/* <-- Added id */}

      <div className="hero-content">
        <h4>Hello, I'm</h4>
        <h1>Shahana k.m.</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I build modern and scalable web applications using
          Python, Django, React and JavaScript.
        </p>

        <div className="hero-buttons">
        <a href="#projects">
            <button className="btn-primary">View Projects</button>
        </a>
        <a href="#contact">
            <button className="btn-secondary">Contact Me</button>
        </a>
        </div>
      </div>

      <div className="hero-image">
        <img src="/src/assets/images/profile.jpeg" alt="profile"/>
      </div>

    </section>
  )
}

export default Hero