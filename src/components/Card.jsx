import React from 'react';

const Card = ({ card }) => {

    return (
        <>
            <div>
                <img alt={'card'} src={card.image}></img>
            </div>
        </>
    )
}

export default Card;