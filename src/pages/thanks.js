import * as React from "react";
import { Link } from "gatsby";
import Layout from '../components/layout.js';
import { para, inicio } from '../styles/thanks.module.css';

export default function ThanksPage() {
  return (
    <Layout>
        <div>
            <p className={para}>Gracias por contactarnos. En breve nos pondremos en contacto...!!!</p>
        </div>
    </Layout>
  );
}