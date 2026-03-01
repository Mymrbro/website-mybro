import "./Produtos.css"

function Produtos() {
  return (
    <div className="produtos-container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Nosso Catálogo de Sobremesas</h1>
          <p className="hero-description">
            Explore toda a linha de produtos disponíveis para atacado,
            desenvolvidos para atender estabelecimentos do food service.
          </p>
        </div>
      </section>

      {/* Grid de produtos */}
      <section className="catalog">
        <div className="products-grid">
          {/* itens do catálogo - pode ser mapeado futureamente */}
          <div className="product-card">
            <div className="product-icon">🍮</div>
            <h3>Pudim de Leite Condensado</h3>
            <p>
              Calda caramelizada e textura inigualável. Ideal para sobremesas
              rápidas.
            </p>
          </div>
          <div className="product-card">
            <div className="product-icon">🍰</div>
            <h3>Petit Gâteau</h3>
            <p>Volume controlado para forno rápido, recheio cremoso.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🥧</div>
            <h3>Cheesecake Tradicional</h3>
            <p>Massa crocante e recheio suave de cream cheese.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🧁</div>
            <h3>Cupcakes Sortidos</h3>
            <p>Sabores variados, coberturas personalizáveis.</p>
          </div>
          <div className="product-card">
            <div className="product-icon">🍪</div>
            <h3>Biscoitos Caseiros</h3>
            <p>Lançamentos sazonais e receitas clássicas.</p>
          </div>
        </div>
      </section>

      {/* CTA para orçamento */}
      <section className="final-cta">
        <h2>Gostou de algum produto?</h2>
        <p>Entre em contato e solicite orçamento ou amostras.</p>
        <a href="/contato" className="cta-button">
          Solicitar Orçamento
        </a>
      </section>
    </div>
  )
}

export default Produtos
