import * as S from "../Main/main_style"
import bigmac from "../../assets/bigmac.svg"
import batata from "../../assets/batata.svg"
import sorvete from "../../assets/sorvete.svg"
import { useState } from "react"

export default function Main() {

  const [snack, setSnack] = useState(bigmac)

  return (
    <S.Main>
      <S.sectionOne>
       <S.Snack>
          <img id="mac" src={snack} alt="snack" />
       </S.Snack>
        <h1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI?</span></h1>
      </S.sectionOne>

      <S.Snacks>
        <S.Item>
          <figure>
            <img onClick={() => setSnack(bigmac)} src={bigmac} alt="" />
            <img onClick={() => setSnack(batata)} src={batata} alt="" />
            <img onClick={() => setSnack(sorvete)} src={sorvete} alt="" />
          </figure>
        </S.Item>
      </S.Snacks>
    </S.Main>
  )
}