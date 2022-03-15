import React from "react";
import Card from '../Card/card.component'
import './card-list.style.css'

export const CardList = ({ posts }) => {
    return (
        <div className="card-list">
            {posts.map(data =>
                <Card post={data} key={data.id} />
            )}
        </div>
    )
}