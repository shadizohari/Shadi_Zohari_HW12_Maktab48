// import React from 'react'
import '../css/Item.css';


const Item = ({ item, explanation, temp, time, addOrder, classes, ...props }) => {

    return (
        <div className={`${classes}`}>
            <div className={`container-item `} onClick={addOrder}>
                <div className="item">
                    <h2>{item}</h2>
                    <p>{explanation}</p>
                </div>
                <div>
                    <p>{temp}</p>
                    <p>{time}min</p>
                </div>
            </div>
        </div>
    )
}

export default Item;