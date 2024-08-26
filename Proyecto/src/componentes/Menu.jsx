import { Fragment } from "react";
import './header.css'
import './Img/Logo.jpg'

function Menu(){

    return (
        <>
        <header>
        <img src="./Img/Logo.jpg" class="logo-header"/> 
    <nav class="navegacion">
        <a class="menu" href="/APEXWEB_SOLUTION/Nosotros.html">Conocenos</a>
        <a class="menu" href="../Sectores/index.html">Sectores</a>
        <a class="menu" href="../SERVICIO/Indexservicio.html">Servicios</a>
        <a class="menu">Proyectos</a>
        <a class="menu" href="../Blog/Blog.html">Blog</a>
        <a class="menu" href="/APEXWEB_SOLUTION/Presupuesto.html">Presupuesto</a>
        <a class="menu" href="../Contactanos/Contactanos.html">Contactanos</a>
    </nav>
    </header>
        </>

    );
}

export default Menu;