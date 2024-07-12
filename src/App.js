import React, {useRef, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript 2', body: 'Description 2' },
        { id: 3, title: 'Javascript 3', body: 'Description 3' },
        { id: 4, title: 'Javascript 4', body: 'Description 4' },
    ]);

    const [title, setTitle] = useState('');

    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title);
        console.log(bodyInputRef.current.value);
    }


    return (
        <div className="App">
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Post name"
                />
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Post description"
                />
                <MyButton onClick={addNewPost}>Add Post</MyButton>
            </form>
            <PostList posts={posts} title='Javascript posts' />
        </div>
    );
}

export default App;
