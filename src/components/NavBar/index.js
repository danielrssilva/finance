import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { Container, GreenDecoration } from "./styles";
import { ImLeaf } from "react-icons/im";
import { FiLogOut } from "react-icons/fi";

import { isAuthenticated, logout } from "../../services/auth";

const NavBar = () => {
  const history = useHistory();
  const [isLogged, setLogged] = useState(isAuthenticated());
  history.listen(() => {
    setLogged(isAuthenticated());
  });
  return (
    <Container>
      <GreenDecoration isAuthenticated={isAuthenticated()} />
      <div className="logo">
        <ImLeaf />
      </div>
      {isLogged && (
        <>
          <nav>
            <div>
              <Link to="/transactions">Minhas transações</Link>
            </div>
            <Link to="/transactions">
              <span onClick={() => logout()}>
                <FiLogOut />
                <p>Sair</p>
              </span>
            </Link>
          </nav>
        </>
      )}
    </Container>
  );
};

export default NavBar;
