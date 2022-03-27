import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Seo } from "./seo.js";

import { wrapper, header, footer } from '../styles/layout.module.css';
import '../styles/global.css';

export default function Layout({
  children,
  title = false,
  description = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <div className={wrapper}>
      <Seo title={title} description={description} path={path} />
      <header className={header}>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/servicios">Servicios</Link>
            </li>
            <li>
              <Link to="/contact">Contactenos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={footer}>
        © 2022 Leurjim
      </footer>
    </div>
  );
}