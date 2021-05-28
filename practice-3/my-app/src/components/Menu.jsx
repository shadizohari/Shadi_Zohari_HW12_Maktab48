import '../css/Menu.css';
import Item from './Item'



const Menu = ({ listMenu, item, explanation, temp, time, addOrder, passStateDisplay, ...props }) => {

    return (
        <div className="container-menu">

            {listMenu.map((x, index) => {
                return (
                    <Item key={x.id} classes={(x.id > 3) ? passStateDisplay() : "display"} item={x.item} explanation={x.explanation} temp={x.temp} time={x.time} addOrder={() => addOrder(x.id)} />
                )
            })
            }

        </div>
    )
}

export default Menu;