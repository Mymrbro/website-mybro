import { Link } from "react-router-dom" 
import "./Footer.css"
 

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Seção 1: Logo e Descrição */}
        <div className="footer-section">
          <h3 className="footer-title">🎂 MyBro</h3>
          <p className="footer-description">
            Fábrica e distribuidora de sobremesas deliciosas com ingredientes
            premium.
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              📷
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* Seção 2: Links de Navegação */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Navegação</h4>
          <ul className="footer-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/produtos">Produtos</a>
            </li>
            <li>
              <a href="/catalogo">Catálogo</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
          </ul>
        </div>

        {/* Seção 3: Informações */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Informações</h4>
          <ul className="footer-links">
            <li>
              <a href="/contato">Contato</a>
            </li>
            <li>
              <a href="/termos">Termos de Uso</a>
            </li>
            <li>
              <a href="/contato">Solicitar Orçamento</a>
            </li>
          </ul>
        </div>

        {/* Seção 4: Contato */}
        <div className="footer-section">
          <h4 className="footer-subtitle">Contato</h4>
          <p className="footer-contact">
            📧 <a href="mailto:mailto:mymrbro@gmail.com?subject=Contato%20Comercial%20MyBro">mymrbro@gmail.com</a>
          </p>
          <p className="footer-contact">
            📱 <a href="tel:+553199767-8637">(31) 99767-8637</a>
          </p>
          <p className="footer-contact">📍 Belo Horizonte, MG</p>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="footer-divider"></div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Meu Mr. Bro - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
