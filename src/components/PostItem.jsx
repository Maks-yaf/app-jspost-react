import React from 'react';
import MyButton from "./UI/button/MyButton";
import '../styles/App.css'
import {useNavigate} from "react-router-dom";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post_btn">
                    <MyButton onClick={() => router(`/posts/${props.post.id}`, {replace: true})} >
                       Open post
                    </MyButton>
                    <MyButton onClick={() => props.remove(props.post)} >
                        Delete post
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default PostItem;