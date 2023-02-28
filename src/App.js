import React, { useState } from 'react';
import './App.css';

function App() {
  if(!localStorage.getItem("card")){
  localStorage.setItem("card",JSON.stringify([]));
}
  const [cards, setCards] = useState(JSON.parse(localStorage.getItem("card")));
  console.log(cards);
  const addCard = () => {
    let num;
    do {
      num = Math.floor(Math.random() * 100) + 1;
    } while (cards.some(card => card.num === num));
    setCards([...cards, { num }],    
    );
    localStorage.setItem("card",JSON.stringify([...cards,{num}]))
  };

  const sortCards = () => {
    setCards([...cards].sort((a, b) => a.num - b.num));
    localStorage.setItem("card",JSON.stringify(cards))

  };

  const deleteCard = (num) => {
    setCards(cards.filter(card => card.num !== num));
    localStorage.setItem("card",JSON.stringify(cards))

  };

  return (
    <div className="App">
      <div className='main'>
        <header>
          <button onClick={addCard}>Add Card</button>
          <button onClick={sortCards}>Sort Cards</button>
        </header>
        <main>
          <div className="card-container">
            {cards.map(card => (
              <div key={card.num} className="card">
                <span>{card.num}</span>
                <button onClick={() => deleteCard(card.num)}>X</button>
              </div>
            ))}
          </div>
        </main>
        <footer className='footer'>
          <p>footer</p>
        </footer>
      </div>
      <div className="instructions">
        <h2>Instructions</h2>
        <p>Instructions</p>
      </div>
    </div>
  );
}

export default App;