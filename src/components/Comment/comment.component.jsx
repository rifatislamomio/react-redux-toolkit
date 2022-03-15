import React from 'react';
import './comment.style.css'

function Comment({ comment }) {

    const toUpper = (inp) => {
        var str = inp.split('');
        str[0] = str[0].toUpperCase()
        return str.join('');
    }

    return (
        <div className='comment'>
            <h3>{toUpper(comment.name)}</h3>
            <p><b>{comment.email}</b></p>
            <p>{toUpper(comment.body)}</p>
        </div>
    );
}
export default Comment;