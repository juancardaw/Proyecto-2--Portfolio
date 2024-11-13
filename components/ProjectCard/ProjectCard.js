import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title}/>
<div class="header">
<h3>${project.title}</h3>
<div>
<a href=${project.github}>
<img src="/icons/github.jpeg" alt="GitHub Icon" />
</a>
<a href=${project.link}>
<img src="/icons/enlace.jpeg" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p>${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;