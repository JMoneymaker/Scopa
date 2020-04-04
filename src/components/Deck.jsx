import React from 'react';
import { cards } from '../data/cards';
import Card from './Card';

const Deck = () => {

    const cardDeck = cards.map((card, i) => (
        <li key={i}>
            <Card card={card}/>

        </li>
    ))
    return (
        <>
        <ul>
            {cardDeck}
        </ul>
        </>
    )
};

Deck.propTypes = {};

export default Deck;