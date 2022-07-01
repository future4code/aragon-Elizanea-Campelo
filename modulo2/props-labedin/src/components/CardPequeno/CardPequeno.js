import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            <p>{ props.email }</p>
            <div>
            
            <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardPequeno;