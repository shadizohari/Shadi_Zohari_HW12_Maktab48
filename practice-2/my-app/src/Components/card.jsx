import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import '../Css/Card.css';

function Card({ name, classes,id,onDelete,addFavorite,classesClose, ...props }) {

  return (
    <div className={`card ${classes}`} onDoubleClick={addFavorite}>
      <span>
      {name}
      </span>
      <AiOutlineClose
        className={`card-close ${classesClose}`}
        onClick={onDelete}
      />
    </div>


  );
}

export default Card;