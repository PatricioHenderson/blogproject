import React, {useEffect, useState } from 'react'
import FakePosts from './FakePosts'

function NewPostForm() {

    const [posts, setPosts] = useState([FakePosts])
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [user_id, setUserId] = useState('');
    const [username, setUsername] = useState('');

    const resetValues = () => {
        setId('')
        setTitle('')
        setText('')
        setUserId('')
        setUsername('')
    }

    const newPost = {
        id: id,
        title: title,
        text: text,
        user_id : user_id,
        username: username,

    };
    const handleAddPost = () => {
        resetValues();
        setPosts([...posts, newPost])    
    };
    // useEffect(() => {
    //     console.log(posts);
    // }, [posts]);

    return (
        <div>
            <div>NewPostForm</div>

            <form>
                <label> Id:
                    <input id='id' name='id' type='number' value={id} onChange={(e) => setId(e.target.value)} />
                </label>
            </form>

            <form>
                <label> title:
                    <input id='title' name='title' type='text' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </label>
            </form>

            <form>
                <label> text:
                    <input id='text' name='text' type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                </label>
            </form>

            <form>
                <label> user id:
                    <input id='userId' name='userId' type='number' value={user_id} onChange={(e) => setUserId(e.target.value)} />
                </label>
            </form>

            <form>
                <label> username:
                    <input id='username' name='username' type='name' value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
            </form>

            <button
                onClick={() => {
                    handleAddPost();
                    console.log(username)
                }}
            >Add post</button>
        </div>
    )
}

export default NewPostForm



