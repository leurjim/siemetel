import React from "react";
import Layout from '../components/layout.js';
import { content } from '../styles/contact.module.css';

export default function ContactoPage() {
  return (
    <Layout>
      <div className={content}>
        
          <h1>Contáctenos</h1>
          <p>Raúl Arias / Leao Urbina</p>
          <p>Celular: 922111168 / 923337297</p>
          <p>Correos: gerencia.seimetel@gmail.com</p>
        
          <h1>Ingrese su información</h1>
          <form
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Send</button>
    </form>
       
      </div>
    </Layout>
  );
}