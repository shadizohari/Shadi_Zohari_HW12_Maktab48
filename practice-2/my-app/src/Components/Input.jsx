import React, { useState } from 'react'
import '../Css/Input.css';


function Input({getValue,value,...props }) {
    return (
        <input type="text" className="input" placeholder="Please Enter Your Name" value={value} onChange={getValue} />
    )
}
export default Input;
