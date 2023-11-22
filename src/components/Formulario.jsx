import React from "react";
import styled from '@emotion/styled'
import useSelectMoneda from "../Hooks/useSelectMoneda";

const InputSubmit = styled.input`
    background-color: #0b65e9;
    color: #fff;
    display:block;
    width:100%;
    padding: 10px;
    margin: 5px;
    border:none;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 5px;
    transition: background-color .3s ease;
    font-size:16px;
    &:hover{
        cursor:pointer;
        background-color:#0e74fc;
    }
`
const Formulario = () =>{
    const monedas = [
        {id:'USD', nombre:'Dolar Estadounidense'},
        {id:'EUR', nombre:'Euro'},
        {id:'BOB', nombre:'Peso Boliviano'}
    ]
    const [ SelectMoneda ] = useSelectMoneda('Seleccione una moneda',monedas)


    return(
        
        <form>
            <SelectMoneda/>
            <InputSubmit type="submit" value="Cotizar"/>
            
        </form>
    )
}
export default Formulario