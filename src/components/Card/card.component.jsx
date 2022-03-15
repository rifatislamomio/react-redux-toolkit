import React from "react";
import { Button } from "../Button/button.component";
import './card.style.css'
import { useNavigate } from "react-router-dom";

const Card = ({ post }) => {
    let navigate = useNavigate();

    const handler = () => {
        navigate('/post', { state: { post: post } })
    }

    const toUpper = (inp) => {
        var str = inp.split('');
        str[0] = str[0].toUpperCase()
        return str.join('');
    }

    return (
        < div className="card" >
            <h2>{toUpper(post.title)}</h2>
            <p>{toUpper(post.body)}</p>
            <Button name={'Details'} onClickHandler={handler} />
        </div >
    )
}

export default Card;