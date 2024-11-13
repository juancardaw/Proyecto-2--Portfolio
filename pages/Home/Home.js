import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";


export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <h3>Bienvenido a mi Portfolio</h3>
    <h1>Juan Carlos Piñas Muñoz</h1>
    <img src="../../public/icons/fotoperfil.jpg">
    <p>Soy un programador web con una sólida base en HTML, JAVA, JS, React y CSS. Me apasiona transformar ideas en realidad digital, creando soluciones web que combinan diseño atractivo con funcionalidad sólida. Mi enfoque se centra en desarrollar aplicaciones web responsivas, de alto rendimiento y fáciles de usar. Me adapto a todo tipo de trabajos implantando las mejores soluciones posibles.</p>
    <a href="mailto:juancarlosgym15@gmail.com">Si tienes un proyecto en mente, escribeme</a>
    </section>`;
};