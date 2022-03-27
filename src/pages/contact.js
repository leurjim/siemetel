import React from "react";
import Layout from '../components/layout.js';
import { content } from '../styles/contact.module.css';

export default function ContactoPage() {
  return (
    <Layout>
      <div className={content}>
        <fieldset>
          <legend>Contáctenos</legend>
          <p>Raúl Arias / Leao Urbina</p>
          <p>Celular: 922111168 / 923337297</p>
          <p>Correos: gerencia.seimetel@gmail.com</p>
        </fieldset>
        <fieldset className>
          <legend>Ingrese su información</legend>
          <form
          name="contact"
          method="POST"
          data-netlify="true"
          >
            <label htmlFor="name">
              Nombre
              <input name="name" type="text" />
            </label>
            <label htmlFor="email">
              Email
              <input name="email" type="email" />
            </label>
            <label htmlFor="message">
              Mensaje:
              <textarea name="message" />
            </label>
            <button type="submit">Enviar</button>
          </form>
        </fieldset>
      </div>
    </Layout>
  );
}