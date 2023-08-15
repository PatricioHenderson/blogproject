import React, { useEffect, useState } from 'react'
import FakePosts from './FakePosts'
import posts from './NewPost'


function Posts() {

  const handleReadPost = (id) => {
    alert('Reading post N° ' + id)
  }

  const handleEditPost = (id) => {
    alert('Editing post N°' + id)
  }

  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  return (
    <div>
      <div>Posts</div>
      <ul>
        {FakePosts.map((FakePost) => (
          <li key={FakePost.id}>
            <p>{FakePost.titulo}</p>
            <p>{FakePost.texto}</p>
            <button
              onClick={() => {
                handleReadPost(FakePost.id)
              }}>Leer</button>

            <button
              onClick={() => {
                handleEditPost(FakePost.id)
              }}>Modificar</button></li>
        ))}
      </ul>

    </div>
  )
}

export default Posts

