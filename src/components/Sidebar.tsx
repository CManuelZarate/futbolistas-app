import {NavLink} from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div>
      <h2>Menu</h2>

      <ul className="list-group">
        <li className="list-group-item">
          <NavLink to="/list" className={({isActive}) => (isActive ? "nav-item nav-link bg-primary text-white text-center" : "dropdown-item text-center")}>Listar futbolistas</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/byId" className={({isActive}) => (isActive ? "nav-item nav-link bg-primary text-white text-center" : "nav-item nav-link text-center")}>futbolista por Id</NavLink>
        </li>
      </ul>
    </div>
  )
}
