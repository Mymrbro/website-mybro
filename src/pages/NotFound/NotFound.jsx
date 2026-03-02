import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <h1 className="error-code">404</h1>

        <h2>Página não encontrada</h2>

        <p>
          Parece que essa página derreteu como um petit gâteau fora do forno 🍫
        </p>

        <div className="notfound-buttons">
          <Link to="/" className="btn btn-primary">
            Voltar para Home
          </Link>

          <Link to="/contato" className="btn btn-outline">
            Falar com a MyBro
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;