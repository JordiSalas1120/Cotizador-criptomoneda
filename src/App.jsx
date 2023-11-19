import styled from '@emotion/styled';
import LogoImagen from './img/imagen-criptos.png';
import './App.css';


const Logo = styled.img `
  margin: 100px auto 0 auto;
  width: 80%;
  max-width: 400px;
  display: block;
`;
const Heading = styled.h1 `
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom:10px;
  &::after{
    content:'';
    width: 100px;
    height:6px;
    background-color: #66A2FE;
    display:block;
    margin: 10px auto 0 auto;
  }
`;
const Contenedor = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 900px;
  width: 90%;
  @media(min-width: 992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap:2rem;
  }
`;
function App() {
  return (
    <Contenedor>
       <Logo
        src={LogoImagen}
        alt="imagen criptomonedas"
       />
      <Heading>Cotiza el precio de tu criptomoneda favorita</Heading>
     
    </Contenedor>
  );
}

export default App;
