import React from 'react';

const Card = ({ card }) => {

    return (
        <>
            <img alt={'card'} src={card.image} />
        </>
    )
}

export default Card;