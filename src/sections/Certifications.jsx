import cert1 from "../assets/certifications/cert1.png"
import cert2 from "../assets/certifications/cert2.png"
import cert3 from "../assets/certifications/cert3.png"

function Certifications() {

  const certifications = [
    {
      image: cert1,
      title: "Python Programming",
      org: "Illinois Tech, USA"
    },
    {
      image: cert2,
      title: "Python with Django",
      org: "Entri Elevate"
    },
    {
      image: cert3,
      title: "NSDC Certificate",
      org: "National Skill Development Corporation"
    }
  ]

  return (
    <section className="certifications" id="certifications">

      <h2 className="section-title">Certifications</h2>

      <div className="certifications-grid">

        {certifications.map((cert,index)=>(
          <div className="cert-card" key={index}>

            <img src={cert.image} alt="certificate" />

            <h3>{cert.title}</h3>
            <p>{cert.org}</p>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Certifications