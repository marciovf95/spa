import React from 'react'
// import ListaCategorias from '../components/ListaCategorias'
import ListaDev from '../components/ListaDev'
const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">SPA</h2>
      </div>
      <ListaDev url={'/dev/'} />
    </main>
  )
}

export default Home
