import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>MyBro</h1>
          <p className="hero-highlight">
            Fábrica e Distribuidora de Sobremesas Premium
          </p>
          <p>
            Produção artesanal em escala profissional para restaurantes,
            buffets e cafeterias.
          </p>

          <div className="hero-buttons">
            <Link to="/produtos" className="btn btn-primary">
              Ver Catálogo
            </Link>
            <Link to="/contato" className="btn btn-outline">
              Falar com Comercial
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE RESUMIDO */}
      <section className="about-preview">
        <div className="container">
          <h2>Excelência desde Belo Horizonte</h2>
          <p>
            Transformamos ingredientes selecionados em experiências memoráveis.
            Nosso foco é ajudar seu estabelecimento a vender mais com
            sobremesas de alto padrão.
          </p>
        </div>
      </section>

      {/* PRODUTOS DESTAQUE */}
      <section className="featured-products">
        <div className="container">
          <h2>Nossos Destaques</h2>

          <div className="products-grid">
            <div className="product-card">
              <h4>Pudim Artesanal</h4>
              <p>Textura cremosa e sabor marcante.</p>
            </div>

            <div className="product-card">
              <h4>Petit Gâteau</h4>
              <p>Recheio cremoso e padrão confeitaria.</p>
            </div>

            <div className="product-card">
              <h4>Tortas Especiais</h4>
              <p>Sabores variados para encantar clientes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* B2B */}
      <section className="b2b">
        <div className="container">
          <h2>Parceria Estratégica para Restaurantes</h2>
          <p>
            Oferecemos preços de atacado, logística refrigerada e suporte
            consultivo para aumentar sua margem de lucro.
          </p>

          <Link to="/contato" className="btn btn-primary">
            Seja um Parceiro
          </Link>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <h2>Pronto para elevar seu cardápio?</h2>
        <p>Entre em contato agora e receba nossa tabela comercial.</p>

        <Link to="/contato" className="btn btn-primary">
          Solicitar Proposta
        </Link>
      </section>

    </div>
  );
}

export default Home;