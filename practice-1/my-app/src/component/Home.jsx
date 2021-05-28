import React, {useEffect, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import '../css/Home.css';
import Card from './Card'


const Home = ({ valuePerson, changeValueName, changeValueNumber, cardDelete, openAdd, openCard, display, ...props }) => {
    const [searchValue, setSearchValue] = useState("");


    // ..........
    const [stateEditedDisplay, setstateEditedDisplay] = useState("displayNone");
    // useEffect(() => {
    //     console.log("ok");
    //     valuePerson.map((card, indesx) => {
    //         if (card.edited) {
    //             setstateEditedDisplay("display");
    //         } else {
    //             setstateEditedDisplay("displayNone");
    //         }
    //         // return (
    //         //     <Card key={card.id} valuePersonName={card.name} valuePersonNumber={card.tell} img={card.img}
    //         //         changeValueName={(e) => changeValueName(e.target.value, card.id)}
    //         //          changeValueNumber={(e) => changeValueNumber(changeValueName, card.id)}
    //         //         cardDelete={(e) => cardDelete(e, card.id)}
    //         //         openCard={(e) => openCard(e, card.id)}
    //         //         display={display}
    //         //         display={stateEditedDisplay} />)
    //     })
    // })
    // ..............
    const search = function (array) {
        let filter = array.filter((card) => { return (card.name.toUpperCase().includes(searchValue.toUpperCase())) });
        return (filter.map((card, index) => {
            return (
                <Card key={card.id} valuePersonName={card.name} valuePersonNumber={card.tell} img={card.img}
                    changeValueName={(e) => changeValueName(e.target.value, card.id)}
                    changeValueNumber={(e) => changeValueNumber(changeValueName, card.id)}
                    cardDelete={(e) => cardDelete(e, card.id)}
                    openCard={(e) => openCard(e, card.id)}
                    display={(card.edited)?"display":"displayNone"} />
            )
        }))
    }

    return (
        <div className="parent-container-home">
            < div className="container-home" >
                <div className="parent-input">
                    <input type="text" placeholder="search..." onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <div className="container-cards">
                    {(searchValue) ? search(valuePerson) :
                        valuePerson.map((card, index) => {
                            return (
                                <Card key={card.id} valuePersonName={card.name} valuePersonNumber={card.tell} img={card.img}
                                    changeValueName={(e) => changeValueName(e.target.value, card.id)}
                                    changeValueNumber={(e) => changeValueNumber(e.target.value, card.id)}
                                    cardDelete={(e) => cardDelete(e, card.id)}
                                    openCard={(e) => openCard(e, card.id)}
                                    display={(card.edited)?"display":"displayNone"} />
                            )
                        })}
                </div>
            </div >
            <div className="icon-parent-add" onClick={openAdd}>
                <AiOutlinePlus className="icon-add" />
            </div>
        </div >
    )
}

export default Home;
