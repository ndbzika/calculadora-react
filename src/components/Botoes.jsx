import React from 'react';

import Botao from './Botao';

import '../styles/botoes.css'

const Botoes = () => {
    return (  
        <div className='lista-de-botoes'>
            <div className='span-2'>
                <Botao>C</Botao>
            </div>
            <Botao>Del</Botao>
            <Botao>&divide;</Botao>
            <Botao>7</Botao>
            <Botao>8</Botao>
            <Botao>9</Botao>
            <Botao>*</Botao>
            <Botao>4</Botao>
            <Botao>5</Botao>
            <Botao>6</Botao>
            <Botao>-</Botao>
            <Botao>1</Botao>
            <Botao>2</Botao>
            <Botao>3</Botao>
            <Botao>+</Botao>
            <div className='span-3'>
                <Botao>0</Botao>
            </div>
            <Botao>=</Botao>
        </div>
    );
}

export default Botoes;