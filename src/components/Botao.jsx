import React from 'react';

import '../styles/botoes.css';
const Botao = ({children, onClick}) => {
    return (  
        <>
            <button 
            variant="contained" 
            onClick={onClick}
            className='botao-item-lista'
            > 
            {children}
            </button>
        </>
    );
}

export default Botao;