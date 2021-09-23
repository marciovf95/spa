import React from 'react'
import imagem from '../assets/img/ilustra-404.svg'
import '../assets/css/404.css'

const Pagina404 = () => { 
  return (
    <main className="container flex flex--centro flex--coluna" >
      <img className="imagem" src={imagem} alt="ilustração Gazin"/>
      <p className="naoencontrado-texto">
        Ops, Essa página não existe!
      </p>
    </main>
  )
}

export default Pagina404