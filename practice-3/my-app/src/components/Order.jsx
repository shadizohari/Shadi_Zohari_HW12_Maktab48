// import React from 'react'
import '../css/Order.css';
// import Item from './Item'


const Order = ({item, titre,explanation, temp, time, addOrder,seconds, ...props }) => {

    return (
        <div className="order">
            <h2>{titre}</h2>
            <h2 className="time">{time} : {seconds} min left</h2>
        </div>
    )
}

export default Order;