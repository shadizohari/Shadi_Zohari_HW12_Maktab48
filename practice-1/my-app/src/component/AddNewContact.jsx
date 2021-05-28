// import React from 'react'
import '../css/AddNewContact.css';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { GiCheckMark } from 'react-icons/gi';



const AddNewContact = ({ redBorder, valueFullName, valueTell, valueEmail, valueAddress, backToHome, submit, ...props }) => {




    return (
        <div className="container-add">
            <label className="label-input">Full name:</label><br />
            <input type="text" className={redBorder} name="fname" onChange={valueFullName} /><br />
            <label>Tell:</label><br />
            <input type="text" className={redBorder} name="tell" onChange={valueTell} /><br />
            <label>Email:</label><br />
            <input type="email" name="email" onChange={valueEmail} /><br />
            <label>Address:</label><br />
            <input type="text" name="address" onChange={valueAddress} /><br />
            <div className="buttons">
                <GiCheckMark className="submit" onClick={submit} />
                <RiArrowGoBackLine className="backToHome" onClick={backToHome} />
            </div>
        </div>

    )
}

export default AddNewContact;