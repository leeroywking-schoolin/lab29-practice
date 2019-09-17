import React from 'react'
import Card from './card.js'


const Deck = (props) => {
    let deck = props.deck
    // let i = props.i
return(
    <section className="deck">
           <header><h2>{deck.title}</h2></header>
          {deck.records.map( (card) =>
          <Card card={card} />
          )}
        </section>
)
}

export default Deck