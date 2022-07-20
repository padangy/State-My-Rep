import {NavLink} from 'react-router-dom';

function Header() {

  return(
    <div>
      <nav>
      <NavLink to={"/"}>StateSearch</NavLink>
      <NavLink to={"/RepSearch"}>RepSearch</NavLink>
      <NavLink to={"/OrgSearch"}>OrgSearch</NavLink>
      </nav>
    </div>
  )
}

export default Header;
