import React, { Component, useState } from 'react'
import Card from './card'
import '../Css/Favorite.css'

function Favorite({ sortName, onDelete, stateFavorite, ...props }) {
    // const [stateFavorite, setFavorite] = useState([])
    return (
        <div className="center">
            <h3 className="titr">Favorites</h3>
            <div>
                {(stateFavorite.length) > 0 ? stateFavorite.sort(sortName).map((human, index) => {
                    return (
                        <Card key={human.id} name={human.name} onDelete={()=>onDelete(human,human.id)} classes={human.sex === "girl" ? "color-girl" : "color-boy"} />
                    )
                }) : false}
            </div>
        </div>
    );
}

export default Favorite;