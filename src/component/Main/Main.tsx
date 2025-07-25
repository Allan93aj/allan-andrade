import React from 'react';
import './Main.css'; // importe o CSS externo

const Main: React.FC = () => {
  return (
    <main className="main-container">
      {/* Wallpaper (fundo gradiente) */}
      <div className="main-wallpaper" />

      {/* Container do card */}
      <div className="main-card-container">
        {/* Lado esquerdo */}
        <div className="main-card-left">
          <div className="main-image-wrapper">
            <img src="/img/eu.png" alt="Allan Andrade" className="main-image" />
          </div>
          <h1 className="main-name">Allan Andrade</h1>
          <span className="main-divider" />
          <h3 className="main-role">Desenvolvedor Front-end</h3>

          {/* Redes sociais */}
          <div className="main-socials">
            <a href="https://www.linkedin.com/in/allan93aj/" target="_blank" rel="noopener noreferrer">
              <img src="/img/icons8-linkedin-48.png" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://github.com/allan93aj" target="_blank" rel="noopener noreferrer">
              <img src="/img/icons8-github-50.png" alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/aandradedev" target="_blank" rel="noopener noreferrer">
              <img src="/img/icons8-instagram-48.png" alt="Instagram" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Lado direito */}
        <div className="main-card-right">
          <h1 className="main-greeting">Olá</h1>

          <div className="main-btn-group">
            <a href="/meucurriculo.html" className="btn btn-primary">
              Currículo
            </a>
            <a href="/projetos.html" className="btn btn-secondary">
              E-commerces
            </a>
          </div>

          <p className="main-description">
            Meu nome é Allan Andrade, Desenvolvedor Front-End! Transformo ideias em soluções digitais com expertise em
            E-commerce. Vamos inovar juntos? 🚀
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
