import React from "react";
import styled from  '@emotion/styled'
const Label = styled.label`
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
`
const useSelectMoneda = (label, opciones) =>{
    console.log("hola")
    const SelectMoneda = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option 
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </select>
        
        </>
        
    )
    return [SelectMoneda]
    
}   
export default useSelectMoneda;