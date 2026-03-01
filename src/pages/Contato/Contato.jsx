import "./Contato.css";

function Contato() {
  return (
    <div className="contato-container">
      <h1>Entre em Contato</h1>
      <p>Fale conosco para encomendas e orçamentos premium.</p>
      <form className="contato-form">
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu E-mail" />
        <textarea placeholder="Sua mensagem"></textarea>
        <button type="submit" className="cta-button">Enviar Mensagem</button>
      </form>
    </div>
  );
}

export default Contato;