import { ReactElement } from "react";

import { Link, useHistory } from "react-router-dom";

import { Header, ImgSection, NavigationSection } from "./styles";

export const NavigationHeader = (): ReactElement => {
  const history = useHistory();

  return (
    <Header>
      <ImgSection>
        <Link to={"/"}>
          <div className="img" />
        </Link>
      </ImgSection>

      <NavigationSection>
        {history.location.pathname === "/produtos" && (
          <Link className="btn" to={"/logoff"}>
            Logoff
          </Link>
        )}
        {(history.location.pathname === "/" ||
          history.location.pathname === "/newUser") && (
          <Link className="btn" to={"/login"}>
            Login
          </Link>
        )}
        {history.location.pathname !== "/" && (
          <Link className="btn" to={"/"}>
            Home
          </Link>
        )}
        {(history.location.pathname === "/" ||
          history.location.pathname === "/login") && (
          <Link className="btn" to={"/newUser"}>
            Cadastrar-se
          </Link>
        )}
      </NavigationSection>
    </Header>
  );
};
