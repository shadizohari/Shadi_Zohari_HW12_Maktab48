import React, {useEffect, useState } from 'react'
import AddNewContact from './component/AddNewContact';
import Home from './component/Home';
import InfoPerson from './component/infoPerson';
import './css/App.css';
import './font-en/font-en.css'
import img_avatar from './img/img_avatar.png';
import img_avatar2 from './img/img_avatar2.png';

function App() {
  const [valuePerson, setValuePerson] = useState([{
    id: 1,
    img: img_avatar,
    name: "shadi",
    tell: "09128128156",
    email: "shadi@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 2,
    img: img_avatar2,
    name: "Aria",
    tell: "09128128147",
    email: "Aria@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 3,
    img: img_avatar,
    name: "Logan",
    tell: "0912812567",
    email: "Logan@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 4,
    img: img_avatar2,
    name: "Quinn",
    tell: "0916789147",
    email: "Quinn@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 5,
    img: img_avatar,
    name: "Kai",
    tell: "0912987654",
    email: "Kai@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 6,
    img: img_avatar2,
    name: "John",
    tell: "0912345678",
    email: "John@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 7,
    img: img_avatar,
    name: "Seraphina",
    tell: "0923456778",
    email: "Seraphina@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 8,
    img: img_avatar2,
    name: "Caroline",
    tell: "09128128147",
    email: "Caroline@gmail.com",
    address: "address",
    edited: false
  }, {
    id: 9,
    img: img_avatar,
    name: "Tobias",
    tell: "09128128147",
    email: "Tobias@gmail.com",
    address: "address",
    edited: false
  }])
  const [stateComponent, setStateComponent] = useState("Home")

  const [statePersonSpecial, setStatePersonSpecial] = useState({
    id: "",
    name: "",
    tell: "",
    email: "",
    address: "",
    img: "",
    edited: false,
  })

  const changeValueName = function (x, id) {
    let tempValuePerson = [...valuePerson]
    let found = tempValuePerson.find(person => person.id == id);
    found.name = x;
    found.edited = true;
    setValuePerson(tempValuePerson)
    setStatePersonSpecial({ ...statePersonSpecial, name: x, edited: true })
  }
  const changeValueNumber = function (x, id) {
    let tempValuePerson = [...valuePerson]
    let found = tempValuePerson.find(person => person.id == id);
    found.tell = x;
    found.edited = true;
    setValuePerson(tempValuePerson)
    setStatePersonSpecial({ ...statePersonSpecial, tell: x, edited: true })
  }
  const changeValueEmail = function (x, id) {
    let tempValuePerson = [...valuePerson]
    let found = tempValuePerson.find(person => person.id == id);
    found.email = x;
    found.edited = true;
    setValuePerson(tempValuePerson)
    setStatePersonSpecial({ ...statePersonSpecial, email: x, edited: true })
  }
  const changeValueAddress = function (x, id) {
    let tempValuePerson = [...valuePerson]
    let found = tempValuePerson.find(person => person.id == id);
    found.address = x;
    found.edited = true;
    setValuePerson(tempValuePerson)
    setStatePersonSpecial({ ...statePersonSpecial, address: x, edited: true })
  }


  const cardDelete = function (e, id) {
    e.stopPropagation();
    let tempValuePerson = valuePerson.filter(person => person.id != id);
    setValuePerson(tempValuePerson)
    setStateComponent("Home")
  }
  const openAdd = function () {
    setStateComponent("Add")
  }
  const backToHome = function () {
    setStateComponent("Home")
  }
  const [stateFullName, setStateFullName] = useState("")
  const [stateTell, setStateTell] = useState("")
  const [stateEmail, setStateEmail] = useState("")
  const [stateAddress, setStateAddress] = useState("")
  const [stateRedBorder, setRedBorder] = useState("");

  const submit = function (e) {
    e.preventDefault();
    const newPerson = {
      id: (valuePerson.length) * 100,
      img: img_avatar2,
      name: stateFullName,
      tell: stateTell,
      email: stateEmail,
      address: stateAddress,
      edited: false
    }
    if (newPerson.name && newPerson.tell) {
      setValuePerson([...valuePerson, newPerson])
      setStateComponent("Home")
      setStateFullName("")
      setStateTell("")
      setStateEmail("")
      setStateAddress("")
    }
  }

  const openCard = function (e, id) {
    e.stopPropagation();
    let tempValuePerson = valuePerson.find(person => person.id == id);
    setStatePersonSpecial({
      id: tempValuePerson.id,
      name: tempValuePerson.name,
      tell: tempValuePerson.tell,
      email: tempValuePerson.email,
      address: tempValuePerson.address,
      img: tempValuePerson.img,
    })
    setStateComponent("infoPerson")
  }

  return (
    <div className="container">

      {(stateComponent == "Home") ?
        <Home valuePerson={valuePerson} changeValueName={changeValueName}
          changeValueNumber={changeValueNumber}
          cardDelete={cardDelete}
          openAdd={openAdd}
          openCard={openCard} /> : false}

      {(stateComponent == "Add") ? <AddNewContact backToHome={backToHome}
        valueFullName={(e) => setStateFullName(e.target.value)}
        valueTell={(e) => setStateTell(e.target.value)}
        valueEmail={(e) => setStateEmail(e.target.value)}
        valueAddress={(e) => setStateAddress(e.target.value)}
        submit={(e) => submit(e)} /> : false}
      {(stateComponent == "infoPerson") ? <InfoPerson backToHome={backToHome}
        fullName={statePersonSpecial.name}
        number={statePersonSpecial.tell}
        email={statePersonSpecial.email}
        address={statePersonSpecial.address}
        img={statePersonSpecial.img}
        changeValueName={(e) => changeValueName(e.target.value, statePersonSpecial.id)}
        changeValueNumber={(e) => changeValueNumber(e.target.value, statePersonSpecial.id)}
        changeValueEmail={(e) => changeValueEmail(e.target.value, statePersonSpecial.id)}
        changeValueAddress={(e) => changeValueAddress(e.target.value, statePersonSpecial.id)}
        cardDelete={(e) => cardDelete(e, statePersonSpecial.id)} /> : false}
    </div>
  );
}

export default App;
