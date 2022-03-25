import * as React from "react";
import Layout from '../components/layout.js';
import { content, column1, column2, serv, list } from '../styles/servicios.module.css';
import Galerias from '../components/galerias';

export default function ServiciosPage() {
  return (
    <Layout>
      <div className={content}>
        <div className={column1}>
          <h1 className={serv}>Nuestros Servicios</h1>
          <ul className={list}>
            <li>Construcción y Adecuaciones de Estaciones Celulares.</li>
            <li>Instalación de Sistema Radiante.</li>
            <li>Instalación de Gabinetes Rectificadores.</li>
            <li>Instalación de Equipos Ericcson, Nokia, Huawei.</li>
            <li>Comisionamiento y Prueba de Llamadas de Equipos Ericcson, Nokia, Huawei.</li>
            <li>Instalación de Antenas.</li>
            <li>TSS para Fichas Técnicas, Evaluación Estructural de Estaciones Base Celulares.</li>
            <li>Instalación de Tableros Eléctricos.</li>
            <li>Medición de Potencia con Power Meter</li>
            <li>Instalación y Fusión de FO en Planta Externa.</li>
          </ul>
          <h1 className={serv}>Proyectos Ejecutados</h1>
          <ul ul className={list}>
            <li>Instalación de Bases Celulares (Nokia, Ericcson, Huawei), Antenas y Rectificadores (ZTE, HUAWEI). Proyecto SBE Movistar como sub-contrata de D'Site Perú S.A.C.</li>
          </ul>
        </div>
        <div className={column2}>
          <h1 className={serv}>Galería de Imagenes</h1>
          <Galerias />
        </div>
      </div>
    </Layout>
  );
}