import React from 'react';
import CleverPush from 'cleverpush';
import './App.css';

function App() {

  return (
    <main>
      <h1>Welcome to CleverPush!</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <div className="cleverpush-content-button" data-type="button-simple" data-button-text="Push Nachrichten erhalten" data-button-text-subscribed="Push Nachrichten abonniert" data-button-background-color="#42a2f2" data-button-color="#ffffff"></div>
   
      
            </main>
  );
}

export default App;
