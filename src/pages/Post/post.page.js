import { useLocation } from 'react-router-dom'
import Post from '../../components/Post/post.component'
import './post-page.styles.css'
import Comment from "../../components/Comment/comment.component";
import { useGetCommentsQuery } from "../../services/posts"

function PostPage() {
    const { state } = useLocation();
    const { post } = state;
    const { data, isLoading, isSuccess } = useGetCommentsQuery(post.id)

    return (
        <div className="post-container">
            <Post post={post} />
            <h3>Comments</h3>
            <div className="comments-container">
                {isLoading && <h2> Loading.... </h2>}

                {isSuccess && data.map((comms, index) =>
                    <Comment comment={comms} key={index} />)}
            </div>
        </div >
    )
}

export default PostPage;