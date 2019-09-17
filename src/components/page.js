import React from 'react';
import Deck from './deck.js'
// import {If, When, Unless} from './if/index.js'

const Page = (props) => {

  const content = props.content || [];

  return (
    <>
      {content.map( (deck,i) => (
        <Deck deck={deck} i={i} />
      ))}
    </>
  );
};

export default Page;
