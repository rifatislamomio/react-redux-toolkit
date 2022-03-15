import React from "react";
import './button.style.css'


export const Button = ({ name, onClickHandler }) => {
    return (
        <button className="btn" onClick={onClickHandler}>
            {name}
        </button>
    )
}