import React from 'react';
import { useEffect, useState } from 'react';
import CleverPush from 'cleverpush';
import './App.css';

function App() {
  CleverPush = window.CleverPush || [];
  CleverPush.push(['triggerOptIn', function(err, subscriptionId) {
      if (err) {
          console.error(err);
      } else {
          console.log('successfully subscribed with id', subscriptionId);
      }
  }]);
  
  // Set the second parameter to 'true' to skip the opt-in timeout.
  // It will also show the opt-in if the user has previously denied or unsubscribed.
  CleverPush.push(['triggerOptIn', true]);
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
      <button class="cleverpush-content-button" data-type="button-simple" data-button-text="Push Nachrichten erhalten" data-button-text-subscribed="Push Nachrichten abonniert" data-button-background-color="#42a2f2" data-button-color="#ffffff"></button>
      <div class="cleverpush-content-button" data-type="button-simple" data-button-text="Push Nachrichten erhalten" data-button-text-subscribed="Push Nachrichten abonniert" data-button-background-color="#42a2f2" data-button-color="#ffffff"></div>
      
            </main>
  );
}

export default App;
