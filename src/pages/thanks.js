import * as React from "react";
import { Link } from "gatsby";
import { para, inicio } from '../styles/thanks.module.css';

export default function ThanksPage() {
  return (
    <div>
    <p className={para}>Gracias por contactarse con nosotros!!!</p>
    <nav className={inicio}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}