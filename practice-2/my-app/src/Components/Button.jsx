// import React from 'react'
import '../Css/Button.css';


const Button = ({ classes, onClickHandel, textBtn,...props }) => {

    return (
        <button onClick={onClickHandel} className={`button ${classes}`}>
            {textBtn}
        </button>
    )
}

export default Button;