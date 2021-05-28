import '../css/infoPerson.css';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { RiDeleteBin5Fill } from 'react-icons/ri';



const InfoPerson = ({ img, fullName, number, email, address, backToHome, changeValueName, changeValueNumber, changeValueEmail, changeValueAddress, cardDelete, ...props }) => {

    return (
        <div className="container-info" >
            <div className="parent-img">
                <img src={img} alt="" />
            </div>
            <div className="parent-info">
                <div className="info">
                    <div>Full Name:</div>
                    <input type="text" value={fullName} onChange={changeValueName} />
                </div>
                <div className="info">
                    <div>Number:</div>
                    <input type="text" value={number} onChange={changeValueNumber} />
                </div>
                <div className="info">
                    <div>Email:</div>
                    <input type="email" value={email} onChange={changeValueEmail} />
                </div>
                <div className="info">
                    <div>Address:</div>
                    <input type="text" value={address} onChange={changeValueAddress} />
                </div>
            </div>
            <div className="buttons">
                <RiArrowGoBackLine className="backToHome" onClick={backToHome} />
                <RiDeleteBin5Fill className="delete-account" onClick={cardDelete} />
            </div>
        </div>

    )
}

export default InfoPerson;