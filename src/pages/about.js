import * as React from "react";
import Layout from '../components/layout.js';
import { article, encabezado, mision } from '../styles/about.module.css';

export default function AboutPage() {
  return (
    <Layout>
      <div className={article}>
        <h1 className={encabezado}>VISION</h1>
        <p className={mision}>Contamos con un equipo calificado, con experiencia, proactivo y comprometido en brindar soluciones del más alto valor para nuestros clientes dentro de la legislación Peruana en Telecomunicaciones</p>

        <h1 className={encabezado}>MISION</h1>
        <p className={mision}>Ser reconocidos como la primera empresa en infraestructura de Telecomunicaciones. Asesorías por la excelencia de nuestros trabajos y completa satisfacción de nuestros clientes.</p>
      </div>
    </Layout>
  );
}