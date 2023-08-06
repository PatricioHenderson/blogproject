import React from 'react'

const FakePosts = 
[
    {
      "id": 12,
      "titulo": "Spiderman",
      "texto": "Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.",
      "user_id": 7,
      "usuario": "stan_lee"
    },
    {
      "id": 14,
      "titulo": "X-MEN",
      "texto": "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
      "user_id": 7,
      "usuario": "stan_lee"
    },
    {
      "id": 16,
      "titulo": "Capitán América",
      "texto": "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
      "user_id": 7,
      "usuario": "stan_lee"
    },
    {
      "id": 17,
      "titulo": "Thanos",
      "texto": "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
      "user_id": 7,
      "usuario": "stan_lee"
    },
      {
      "id": 18,
      "titulo": "Ant-Man",
      "texto": "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
      "user_id": 7,
      "usuario": "stan_lee"
    },
  ]

function Posts() {
    const handleReadPost = (id) => {
        alert('Reading post N° ' + id)
    }

    const handleEditPost = (id) => {
        alert('Editing post N°' + id)
    }
  return (
    <div>
      <div>Posts</div>

      <ul>
        {FakePosts.map((FakePost) => (
          <li key={FakePost.id}>
            <p>{FakePost.titulo}</p>
            <p>{FakePost.texto}</p>
            <button
                onClick={ () =>{
                    handleReadPost(FakePost.id)
                }}>Leer</button>

            <button
                onClick={() =>{
                    handleEditPost(FakePost.id)
                }}>Modificar</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Posts