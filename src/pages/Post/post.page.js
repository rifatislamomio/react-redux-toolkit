import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Post from '../../components/Post/post.component'
import './post-page.styles.css'
import Comment from "../../components/Comment/comment.component";

function PostPage() {
    const [comments, setComments] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { state } = useLocation();
    const { post } = state;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(res => res.json())
            .then(comnts => {
                setComments(comnts)
                setIsLoaded(true)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [post.id])
    return (
        <div className="post-container">
            <Post post={post} />
            <h3>Comments</h3>
            <div className="comments-container">
                {!isLoaded && <h2> Loading.... </h2>}

                {comments.map((comms, index) =>
                    <Comment comment={comms} key={index} />)}
            </div>
        </div >
    )
}

export default PostPage;