import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import Post from '../../components/Post/post.component'
import './post-page.styles.css'
import Comment from "../../components/Comment/comment.component";

function PostPage() {
    const { state } = useLocation();
    const { post } = state;

    
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