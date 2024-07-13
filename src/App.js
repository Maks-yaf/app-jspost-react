import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: '11', body: 'aa'},
        {id: 2, title: '22 2', body: 'vvv 2'},
        {id: 3, title: '33 3', body: 'bbb 3'},
        {id: 4, title: '444 4', body: 'nnn 4'},
    ]);
    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        console.log('sorted function work now')
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const sortedAndSearchedPost = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    return (
        <div className="App">
            <PostForm
                create={createPost}
            />
            <hr style={{margin: '15px 0px'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPost}
                title='Javascript posts'
            />
        </div>
    );
}

export default App;
