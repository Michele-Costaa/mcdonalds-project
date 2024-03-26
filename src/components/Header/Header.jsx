import * as S from "../Header/header_style";
import logo from "../../assets/logo.svg";
import app from "../../assets/app.svg";
import cell from "../../assets/cell.svg";

export default function Header() {
  return (
    <S.Header>
      <img id="logo" src={logo} alt="logo McDonalds" />

      <S.Nav>
        <button className="button-one">
          <img src={app} alt="app" />
          Baixe o App
        </button>

        <button className="button-two">
          Peça seu Méqui
          <img src={cell} alt="cell" />
        </button>
      </S.Nav>
    </S.Header>
  );
}
