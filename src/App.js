import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: '11', body: 'aa'},
        {id: 2, title: '22 2', body: 'vvv 2'},
        {id: 3, title: '33 3', body: 'bbb 3'},
        {id: 4, title: '444 4', body: 'nnn 4'},
    ]);
    const [selectorSort, setSelectorSort] = useState("");

    const createPost = (newPost) => {
        setPosts( [...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectorSort(sort);
        setPosts([...posts].sort( (a , b) => a[sort].localeCompare(b[sort])));
    }


    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr  style={{margin:'15px 0px'}}/>
            <MySelect
                value={selectorSort}
                onChange={sortPosts}
                defaultValue='Sort by'
                options={[
                    {value: 'title', name: 'By name'},
                    {value: 'body', name: 'By description'},
                ]}
            />
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title='Javascript posts'/>
                :
                <h2 style={{textAlign: 'center'}}>
                    No posts
                </h2>}
        </div>
    );
}

export default App;
