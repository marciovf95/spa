import React from 'react'
import { Link } from 'react-router-dom'
import imagem from '../assets/img/logo-gazin.svg'
import '../assets/css/componentes/cabecalho.css'

const Cabecalho = () => { 
  return(
    <header className="cabecalho container">
      <div className="menu-hamburger">
        <span className="menu-hamburger__icone">
        </span>
      </div>
      <div className="cabecalho-container">
        <Link to="/" className="flex flex--centro">
          <img className="cabecalho__logo" src={imagem} alt="Logo Gazin"/>
          {/* <h1 className="cabecalho__titulo">PetShop</h1> */}
        </Link>
      </div>

      <nav className="menu-cabecalho">
        <ul className="menu-itens">  
          <li><Link to="/" className="menu-item menu-item--entrar">Dev</Link></li>
          <li><Link to="/sobre" className="menu-item ">Sobre</Link></li>          
        </ul>

      </nav>
      <div className="menu-cabecalho-background"></div>
    </header>
  )
}


export default Cabecalho