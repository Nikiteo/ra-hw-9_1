import { NavLink } from 'react-router-dom';

const activeClassName = 'menu__item-active';

export default function Menu(prop) {
  return (
    <nav className="menu">
      <NavLink activeClassName={activeClassName} className="menu__item" exact to={"/"}>Главная</NavLink>
      <NavLink activeClassName={activeClassName} className="menu__item" to={"/drift"}>Дрифт-такси</NavLink>
      <NavLink activeClassName={activeClassName} className="menu__item" to={"/timeattack"}>Time Attack</NavLink>
      <NavLink activeClassName={activeClassName} className="menu__item" to={"/forza"}>Forza Karting</NavLink>
    </nav>
  )
};