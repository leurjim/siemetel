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
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          >
            <label>
              Nombre
              <input name="name" type="text" />
            </label>
            <label>
              Email
              <input name="email" type="email" />
            </label>
            <label>
              Mensaje:
              <textarea name="message" />
            </label>
            <button>Enviar</button>
          </form>
        </fieldset>
      </div>
    </Layout>
  );
}