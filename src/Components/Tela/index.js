import React from 'react';
// import styled from 'styled-components';
import Lero from '../Frase';
import Botao from '../Botao';

function Tela (props){
    const [estado,alterarEstado] = React.useState({})

    const Click = async () => {
        const API = "https://testapi.io/api/matheusrod92/lero-lero";
        const res = await fetch(API);
        const data = await res.json();
        const randon = Math.random() * 11;
        
        alterarEstado(data[Math.floor(randon)]);
    }


    return (
        <div> 
            <Lero> {estado.frase}
                </Lero> 
                    
            <Botao onClick={Click}>Vem testar meu lero lero ;* </Botao>

        </div>
    );
        
}
export default Tela;