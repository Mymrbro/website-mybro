import "./Contato.css"

function Contato() {
  return (
    <div className="contato-page">
      {/* HERO */}
      <section className="contato-hero">
        <h1>Entre em Contato</h1>
        <p>Solicite nossa tabela comercial ou tire suas dúvidas.</p>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="contato-content">
        <div className="contato-container">
          {/* INFORMAÇÕES */}
          <div className="contato-info">
            <h2>Fale Conosco</h2>

            <div className="info-item">
              <span>📧</span>
              <a href="mailto:mymrbro@gmail.com?subject=Contato%20Comercial%20MyBro">mymrbro@gmail.com</a>
            </div>

            <div className="info-item">
              <span>📱</span>
              <a href="tel:+5531997678637">(31) 99767-8637</a>
            </div>

            <div className="info-item">
              <span>📍</span>
              <p>Belo Horizonte, MG</p>
            </div>

            <a
              href="https://wa.me/5531997678637"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary contato-whatsapp"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          {/* FORMULÁRIO */}
          <div className="contato-form">
            <h2>Envie uma Mensagem</h2>
            <a
              href="mailto:mymrbro@gmail.com?subject=Contato%20Comercial%20MyBro"
              className="btn btn-primary"
            >
              Enviar E-mail
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contato
