import * as React from "react";
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';
import { content, a, b, c, imageWrapper, box1, decla, gallery } from '../styles/index.module.css';
import Towers from '../components/towers';

export default function IndexPage() {
  return (
    <Layout>
      <div className={content}>
        <div className={a}>
          <div className={imageWrapper}>
            <StaticImage 
              src="../images/pexels-kamiz-ferreira-2699810.jpg"
              alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused."
              placeholder="blurred"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className={b}>
        <section className={box1}>
            <h1>SEIMETEL</h1>
          </section>
          <p className={decla}>
          Confía en <strong>Servicios e Implementación en Telecomunicaciones</strong>. Tenemos el equipo, el conocimiento, la experiencia y las alianzas estratégicas necesarias para llevar a cabo todos los procesos relacionados con las infraestructuras de TI.

          Nos integramos contigo para proporcionarte el empuje tecnológico totalmente alineado con tus procesos de negocio, con el modelo financiero que mejor te encaje.  
          </p>
        </div>
        <div className={c}>
          <div className={gallery}>
            <Towers />
          </div>
        </div>
      </div>
    </Layout>
  );
}
