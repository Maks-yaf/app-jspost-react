import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";

function App() {

    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript 2', body: 'Description 2' },
        { id: 3, title: 'Javascript 3', body: 'Description 3' },
        { id: 4, title: 'Javascript 4', body: 'Description 4' },
    ]);

    const [posts2, setPosts2] = useState([
        { id: 1, title: 'Java', body: 'Description' },
        { id: 2, title: 'Java 2', body: 'Description 2' },
        { id: 3, title: 'Java 3', body: 'Description 3' },
        { id: 4, title: 'Java 4', body: 'Description 4' },
    ]);

    return (
        <div className="App">
            <PostList posts={posts} title='Javascript posts' />
            <PostList posts={posts2} title='Java posts' />
        </div>
    );
}

export default App;
