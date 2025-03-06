import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>

        <li>
          <Link to={"/listar_livros"}>Listar Livros</Link>
        </li>

        <li>
          <Link to={"/cadastrar_livros"}>Cadastrar Livros</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
  