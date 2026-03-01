import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">🎂 MyBro</h1>
          <p className="hero-subtitle">
            Fábrica e Distribuidora de Sobremesas Premium
          </p>
          <p className="hero-description">
            A felicidade em formato de doce. Pudins artesanais e Petit Gâteaux
            de confeitaria para sua mesa.
          </p>
          <Link to="/produtos" className="cta-button">
            Ver Catálogo de Produtos
          </Link>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Seção de Apresentação */}
      <section className="about-factory">
        <div className="section-content">
          <h2>Nossa História</h2>
          <p>
            Na MyBro, transformamos ingredientes selecionados em experiências memoráveis. 
            Nossa produção artesanal garante o sabor de "feito em casa" com a escala 
            necessária para atender o seu negócio.
          </p>
          <p>
            Desde a fundação em Belo Horizonte, nosso compromisso é com a excelência 
            e a pontualidade, tornando-nos parceiros estratégicos de restaurantes e buffets.
          </p>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="differentials">
        <h2>Por Que Ser Parceiro Mybro?</h2>
        <div className="differentials-grid">
          <div className="differential-item">
            <div className="differential-icon">✨</div>
            <h4>Qualidade Premium</h4>
            <p>Rigoroso controle sanitário e seleção dos melhores ingredientes.</p>
          </div>
          <div className="differential-item">
            <div className="differential-icon">🚚</div>
            <h4>Logística Eficiente</h4>
            <p>Entregas programadas com frota refrigerada para garantir o frescor.</p>
          </div>
          <div className="differential-item">
            <div className="differential-icon">💰</div>
            <h4>Preços de Atacado</h4>
            <p>Margens competitivas comprando diretamente da fábrica.</p>
          </div>
          <div className="differential-item">
            <div className="differential-icon">🤝</div>
            <h4>Suporte Consultivo</h4>
            <p>Equipe pronta para ajudar no sucesso do seu estabelecimento.</p>
          </div>
        </div>
      </section>

      {/* Chamada para Ação Final */}
      <section className="final-cta">
        <h2>Explore Nossa Linha Completa</h2>
        <p>Acesse nosso catálogo ou entre em contato para soluções personalizadas.</p>
        <div className="cta-buttons">
          <Link to="/produtos" className="btn btn-primary">
            Ver Catálogo
          </Link>
          <Link to="/contato" className="btn btn-secondary">
            Entre em Contato
          </Link>
        </div>
      </section>

      {/* Contato Rápido */}
      <section className="quick-contact">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <div>
            <p className="contact-label">Email</p>
            <a href="mailto:mymrbro@gmail.com">mymrbro@gmail.com</a>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📱</span>
          <div>
            <p className="contact-label">WhatsApp</p>
            <a href="https://wa.me/5531997678637" target="_blank" rel="noreferrer">
              (31) 99767-8637
            </a>
          </div>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📍</span>
          <div>
            <p className="contact-label">Localização</p>
            <p>Belo Horizonte, MG</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;