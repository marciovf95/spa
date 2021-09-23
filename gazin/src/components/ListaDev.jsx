import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../api/api'


const ListaDev = ( { url } ) => { 

const [posts, setPosts] = useState([])

useEffect(() => {
  busca(url, setPosts)
}, [url])

  return(
    <section className="posts container">
      { 
       posts.map((post)=> (
         <Link className={`cartao-post cartao-post--${post.sexo}`} key={post.id} to={`/dev/${post.id}`}>
           <article >
              <h3 className="cartao-post__titulo">
                {post.nome}
              </h3>
              <p className="cartao-post__meta">{post.hobby}</p>
           </article> 
         </Link>
       ))
      }
    </section>
  )
}

export default ListaDev