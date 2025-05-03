import LogoFuria from "../../assets/LogoFuria";
import LogoPantera from "../../assets/LogoPantera";
import { NavLink } from "react-router";
import "./Acessar.css";


function Acessar() {
  return (
    <div className="container-acesso">
      <div className="navbar">
        <LogoPantera   className="logo-pantera" />
        <h1 className="text-navbar">E-sports</h1>
        <LogoFuria className="logo-furia" />
      </div>

      <div className="text-questionario">
        <h1>
          Bem-vindo a pagina de fãs conectados <br />
          com a
          <LogoFuria />
        </h1>
        <div className="space-button">
          <h2>Queremos te conhecer melhor!</h2>
          <NavLink to="/Dados" className="button-acessar">acessar</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Acessar;
