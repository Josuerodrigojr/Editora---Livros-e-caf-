import React from "react";
import { NavLink } from "react-router-dom";

let linkCorrente = {
  color: "#027399",
};
const Navegacao = () => (
  <ul>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/frontend">
        Programação
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/programacao">
        Clássicos
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/design">
        Matemática
      </NavLink>
    </li>
    <li>
      <NavLink exact activeStyle={linkCorrente} to="/catalogo">
        Catalogo
      </NavLink>
    </li>
  </ul>
);

export default Navegacao;
