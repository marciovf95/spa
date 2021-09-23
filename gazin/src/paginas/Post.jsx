import React, {useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/post.css'

const Post = () => { 
  let history = useHistory()
  const { id } = useParams()
  const[post, setPost] = useState({})

  useEffect(() => {
    busca(`/dev/${id}`, setPost)
    .catch(()=>{
      history.push('/404')
    })
  }, [id])

  return(
    <main className="container flex flex--centro">
      <article className="cartao post">
        <label>Nome:</label>
        <h2 className="cartao__titulo">{post.nome}</h2>
        <label>Idade:</label>
        <p className="carta__texto">{post.idade} anos</p>
        <label>Sexo:</label>
        <p className="carta__texto">{post.sexo}</p>
        <label>Hobby:</label>
        <p className="carta__texto">{post.hobby}</p>
        <label>Data Nascimento:</label>
        <p className="carta__texto">{post.dataNascimento}</p>
      </article>
    </main>
  )
}

export default Post