import React from 'react';
import './post.style.css'
function Post({ post }) {

    const toUpper = (inp) => {
        var str = inp.split('');
        str[0] = str[0].toUpperCase()
        return str.join('');
    }

    return (
        <div className='post'>
            <h2>{toUpper(post.title)}</h2>
            <p>{toUpper(post.body)}</p>
        </div>
    );
}

export default Post;