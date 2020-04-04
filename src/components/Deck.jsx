import React from 'react';
import { cards } from '../data/cards';
import Card from './Card';
import './Deck.css';

const Deck = () => {

    const scopaDeck = cards.map((card, i) => (
        <li key={i}>
            <Card card={card}/>
        </li>
    ))

    return (
        
        <>
            <ul className='Deck'>
                {scopaDeck}
            </ul>
        </>
    )
};

export default Deck;