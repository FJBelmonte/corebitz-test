import "./styles.css";

import React from "react";

const Footer = () => {
  return (
    <footer>
      <form>
        <div className='news-container'>
          <h1 className='tittle'>Newsletter</h1>
          <h2 className='subtitle'>
            Receba nossas promoções e novidades. Inscreva-se:
          </h2>
        </div>
        <input placeholder='Seu nome' value='' onChange={() => {}} />
        <input placeholder='Seu email' value='' onChange={() => {}} />
        <button type='submit'>ENVIAR</button>
      </form>
    </footer>
  );
};
export default Footer;
