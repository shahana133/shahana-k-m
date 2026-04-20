function Projectcard({title,desc,github,live}){

return(

<div className="project-card">

<h3>{title}</h3>

<p>{desc}</p>

<div className="project-links">

<a href={github} target="_blank">GitHub</a>

{live && <a href={live} target="_blank">Live Demo</a>}

</div>

</div>

)

}

export default Projectcard