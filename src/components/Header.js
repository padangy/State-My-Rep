import {NavLink} from 'react-router-dom';

function Header() {

  return(
    <div>
      <nav className="navbar">
      <NavLink to={"/"}>StateMyRep</NavLink>
      <NavLink to={"/RepSearch"}>RepSearch</NavLink>
      <NavLink to={"/OrgSearch"}>OrgSearch</NavLink>
      <NavLink to={"/OrgIDSearch"}>OrgIDSearch</NavLink>
      </nav>
    </div>
  )
}

export default Header;
