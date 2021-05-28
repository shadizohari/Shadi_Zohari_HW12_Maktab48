import React, { Component, useState } from 'react'
import Input from './Components/Input'
import Card from './Components/card'
import Button from './Components/Button'
import Favorite from './Components/Favorite'
import './Css/App.css'

function App() {
  const PEOPLE = [
    {
      id: 0,
      name: 'Aria',
      sex: 'girl'
    }, {
      id: 1,
      name: 'Logan',
      sex: 'boy'
    }, {
      id: 2,
      name: 'Quinn',
      sex: 'girl'
    }, {
      id: 3,
      name: 'Kai',
      sex: 'boy'
    }, {
      id: 4,
      name: 'Dashiell',
      sex: 'boy'
    }, {
      id: 5,
      name: 'John',
      sex: 'boy'
    }, {
      id: 6,
      name: 'Seraphina',
      sex: 'girl'
    }, {
      id: 7,
      name: 'Caroline',
      sex: 'girl'
    }, {
      id: 8,
      name: 'Tobias',
      sex: 'boy'
    }, {
      id: 9,
      name: 'Harper',
      sex: 'girl'
    }, {
      id: 10,
      name: 'Mabe',
      sex: 'girl'
    }, {
      id: 11,
      name: 'Iris',
      sex: 'girl'
    }, {
      id: 12,
      name: 'Beatrice',
      sex: 'girl'
    }, {
      id: 13,
      name: 'Knox',
      sex: 'boy'
    }, {
      id: 14,
      name: 'August',
      sex: 'boy'
    }, {
      id: 15,
      name: 'Poppy',
      sex: 'girl'
    }, {
      id: 16,
      name: 'Aurora',
      sex: 'girl'
    }, {
      id: 17,
      name: 'Wyatt',
      sex: 'boy'
    }, {
      id: 18,
      name: 'Ezra',
      sex: 'boy'
    }, {
      id: 19,
      name: 'Emily',
      sex: 'girl'
    }, {
      id: 20,
      name: 'Sebastian',
      sex: 'boy'
    }
  ]
  const [statePepole, setPepole] = useState(PEOPLE)
  const [inputValue, setInputValue] = useState("");
  const [displayButton, setDispalyButton] = useState(false);
  const [stateFavorite, setFavorite] = useState([])

  const getValue = function (x) {
    setInputValue(x);
    (x) ? setDispalyButton(true) : setDispalyButton(false);
  }

  const clearSearch = function () {
    setInputValue("");
    setDispalyButton(false);
  }

  const sortName = (a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);

  const onDelete = function (human, humanId) {
    setPepole([...statePepole, human])
    setFavorite(stateFavorite.filter((human) => human.id !== humanId))

  }
  const search = function (array) {
    let filter = array.filter((human) => { return (human.name.toUpperCase().includes(inputValue.toUpperCase())) });
    return (filter.sort(sortName).map((human, index) => {
      if (array == stateFavorite) {
        return (
          <Card key={human.id}
            classesClose="visibilty"
            name={human.name}
            addFavorite={() => addFavorite(human, human.id)}
            onDelete={() => onDelete(human, human.id)}
            classes={human.sex === "girl" ? "color-girl" : "color-boy"} />
        )
      } else {
        return (
          <Card key={human.id}
            classesClose="unvisibilty"
            name={human.name}
            addFavorite={() => addFavorite(human, human.id)}
            classes={human.sex === "girl" ? "color-girl" : "color-boy"} />
        )
      }
    }))

  }

  const addFavorite = function (x) {
    setFavorite([...stateFavorite, x]);
    setPepole(statePepole.filter((y) => y.id !== x.id))
  }

  return (
    <div className="container">
      <Input getValue={(e) => getValue(e.target.value)} value={inputValue} />
      <div className="parent-button">
        {(displayButton) ? <Button textBtn="Clear Search" onClickHandel={clearSearch} /> : false}
      </div>
      <div className="parent-favor">
        {(inputValue && stateFavorite.length > 0) ? search(stateFavorite) : <Favorite onDelete={onDelete} stateFavorite={stateFavorite} classesClose="visibilty" />}
      </div>
      <hr className="hr" />
      {(inputValue) ? search(statePepole) : statePepole.sort(sortName).map((human, index) => {
        return (
          <Card key={human.id}
            classesClose="unvisibilty"
            name={human.name}
            addFavorite={() => addFavorite(human, human.id)}
            classes={human.sex === "girl" ? "color-girl" : "color-boy"} />
        )
      })
      }

    </div>
  );
}

export default App;
