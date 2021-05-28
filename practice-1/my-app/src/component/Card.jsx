// import React from 'react'
import '../css/Card.css';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { ImBookmark } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';




const Card = ({ display, openCard, valuePersonName, valuePersonNumber, changeValueName, changeValueNumber, cardDelete, img, ...props }) => {

    return (
        <div className="card" onDoubleClick={openCard} >
            <div className="parent-flex">
            <div className="parent-img">
                    <img src={img} alt="" />
                </div>
                <BiEdit className={`edit ${display}`} />
            </div>
            <ImBookmark className="label" />
            <div className="parent-inputs-home">
                <input type="text" name="name" value={valuePersonName} onChange={changeValueName} />
                <input type="text" name="tellPhone" value={valuePersonNumber} onChange={changeValueNumber} />
                {/* <div ></div> */}
            </div>
            <RiDeleteBin5Fill className="closeCard" onClick={cardDelete} />
        </div>

    )
}

export default Card;