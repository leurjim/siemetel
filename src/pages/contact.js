import React from "react";
import Layout from '../components/layout.js';
import { content } from '../styles/contact.module.css';

export default function ContactPage() {
  return (
    <Layout>
      <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </Layout>
  );
}