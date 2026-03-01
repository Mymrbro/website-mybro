import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre-container">
      {/* Banner Principal */}
      <section className="hero">
        <h1>Mybro Sobremesas</h1>
        <p>A Fábrica e Distribuidora de Felicidade em Formato de Doce.</p>
      </section>

      {/* Texto de Apresentação (Lero-Lero) */}
      <section className="about-factory">
        <h2>Nossa Produção Industrial</h2>
        <p>
          Fundada com o objetivo de revolucionar o mercado de *food service*, a Mybro é especialista 
          na fabricação em larga escala de Pudins artesanais e Petit Gateaus premium. Nossa fábrica 
          utiliza tecnologia de ponta para garantir que cada sobremesa mantenha a textura perfeita 
          e o sabor caseiro que seus clientes exigem.
        </p>
        <p>
          Como distribuidores, atendemos desde pequenos cafés até grandes redes de restaurantes e 
          hotéis. Nosso processo de logística refrigerada garante a integridade do produto, permitindo 
          que o seu estabelecimento sirva uma sobremesa de alta confeitaria com a praticidade de um 
          produto pronto para o consumo.
        </p>
      </section>

      {/* Sessão Extra para dar Scroll (Rolar a página) */}
      <section className="distribuicao">
        <h3>Por que ser um parceiro Mybro?</h3>
        <ul>
          <li><strong>Pudim de Leite Condensado:</strong> Receita exclusiva com calda caramelizada no ponto exato.</li>
          <li><strong>Petit Gateau:</strong> Recheio cremoso e explosivo, desenvolvido para o forno rápido.</li>
          <li><strong>Logística Eficiente:</strong> Entregas programadas para que nunca falte estoque.</li>
          <li><strong>Padrão de Qualidade:</strong> Rigoroso controle sanitário e seleção de ingredientes.</li>
        </ul>
      </section>

      <section className="contato-breve">
        <h2>Leve nossas sobremesas para o seu negócio!</h2>
        <p>Atendemos toda a região com preços de atacado direto da fábrica.</p>
      </section>
    </div>
  );
}

export default Sobre;