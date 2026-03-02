import { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  const [active, setActive] = useState(false)

  const toggleMenu = () => {
    setActive(!active)
  }

  const handleLinkClick = () => {
    setActive(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link
          to="/"
          onClick={handleLinkClick}
          style={{
            textDecoration: "none",
            color: "inherit",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span className="logo-emoji">🍰</span>
          MyBro
        </Link>
      </div>

      {/* Menu de Links - Agora usando caminhos de ROTA limpos */}
      <ul className={active ? "nav-links active" : "nav-links"}>
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/produtos" onClick={handleLinkClick}>
            Produtos
          </Link>
        </li>
        <li>
          <Link to="/sobre" onClick={handleLinkClick}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="/contato" onClick={handleLinkClick}>
            Contato
          </Link>
        </li>
      </ul>

      {/* Botão de Ação */}
      <div className="nav-actions">
        <Link to="/contato" className="btn-orcamento" onClick={handleLinkClick}>
          Orçamento
        </Link>
      </div>

      {/* Ícone do Hambúrguer */}
      <div className="hamburguer" onClick={toggleMenu}>
        <div className={active ? "line1 toggle" : "line1"}></div>
        <div className={active ? "line2 toggle" : "line2"}></div>
        <div className={active ? "line3 toggle" : "line3"}></div>
      </div>
    </nav>
  )
}

export default Navbar
