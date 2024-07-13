import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: '11', body: 'aa'},
        {id: 2, title: '22 2', body: 'vvv 2'},
        {id: 3, title: '33 3', body: 'bbb 3'},
        {id: 4, title: '444 4', body: 'nnn 4'},
    ]);
    const [selectorSort, setSelectorSort] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const sortedPosts = useMemo( () =>{
        console.log('sorted function work now')
        if (selectorSort) {
            return [...posts].sort((a, b) => a[selectorSort].localeCompare(b[selectorSort]))
        }
        return posts;
    }, [selectorSort, posts] );

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const sortedAndSearchedPost = useMemo ( () => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
    }, [searchQuery, sortedPosts ])

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const sortPosts = (sort) => {
        setSelectorSort(sort);
    }


    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0px'}}/>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder='Seacrh...'
                />
                <MySelect
                    value={selectorSort}
                    onChange={sortPosts}
                    defaultValue='Sort by'
                    options={[
                        {value: 'title', name: 'By name'},
                        {value: 'body', name: 'By description'},
                    ]}
                />
            </div>
            {sortedAndSearchedPost.length
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPost} title='Javascript posts'/>
                :
                <h2 style={{textAlign: 'center'}}>
                    No posts
                </h2>}
        </div>
    );
}

export default App;
