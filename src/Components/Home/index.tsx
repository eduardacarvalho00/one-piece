import { Container } from "./styles";
import { AiOutlineArrowDown } from 'react-icons/ai'

export default function Home() {
  return (
    <Container>
      <div>
        <img src="https://icons.iconarchive.com/icons/crountch/one-piece-jolly-roger/128/Luffys-flag-icon.png" alt="icon one-piece" />
      </div>
      <h1>Conheça o bando de piratas do <br /> Luffy</h1>
      <AiOutlineArrowDown className="icon-arrow" size={50} />
    </Container>
  )
}