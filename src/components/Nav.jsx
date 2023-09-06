import { NavLink } from "react-router-dom"

import "./Nav.css"
const Nav = () => {
  return (
    <div className="links">
        <NavLink to="/FactorialNumber" className="active">Número Fatorial</NavLink>
        <NavLink to="/FactorialDivision"  className="active">Divisão Fatorial</NavLink>
        <NavLink to="/FactorialArrangement"  className="active">Arranjo</NavLink>
        <NavLink to="FactorialCombination"  className="active">Combinação Simples</NavLink>
    </div>
  )
}

export default Nav