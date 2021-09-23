import React from 'react'
import '../assets/css/componentes/cartao.css'

const Sobre = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sobre Gazin</h2>
      </div>
      <section className="container flex flex--centro">       
        <article className="cartao">
        <p className="P">UMA VERDADEIRA REDE DE SOLUÇÕES</p>
        É assim que podemos definir o Grupo Gazin, que começou atuando exclusivamente no varejo de móveis e eletrodomésticos em 1966, 
        mas que sempre esteve atento às oportunidades de oferecer aos seus clientes o que desejavam e necessitavam. Hoje, mais de 10
         empresas integram o grupo, atuando nas mais diversas áreas, que vão desde o varejo, atacado, serviços, soluções financeiras e 
         agropecuária.
        </article>        
      </section>
    </main>
  )
}

export default Sobre
