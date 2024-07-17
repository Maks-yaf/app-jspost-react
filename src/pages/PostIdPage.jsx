import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
            const response = await PostService.getById(params.id);
            setPost(response.data)
        }
    )

    const [fetchComments, isComLoading, comError] = useFetching(async () => {
            const response = await PostService.getCommentsByPostId(params.id);
            setComments(response.data)
        }
    )

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

    return (
        <div>
            <h1>Post page ID = {params.id}</h1>
            {isLoading
                ? <div style={{justifyContent: "center", margin: 30}}> <Loader/> </div>
                    :
                <div>
                    <div> {post.id}. {post.title}</div>
                    <div> {post.body}</div>
                </div>
            }
            <h1>
                Comments
            </h1>
            <div>
                {isComLoading
                ? <div style={{justifyContent: "center", margin: 30}}> <Loader/> </div>
                : <div>
                        {comments.map( (comment, index) =>
                            <div style={{marginTop: 15}} key={index}>
                                <h4>User name: {comment.name}</h4>
                                <h5>User email: {comment.email}</h5>
                                <div>{comment.body}</div>
                            </div>
                        )}
                </div>
                }
            </div>

        </div>
    )
        ;
};

export default PostIdPage;