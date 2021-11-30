import React, { useEffect } from 'react';
import './App.css';
import Button from './Button';

function App() {
  const [text, setText] = React.useState('');
  const CleverPush = window.CleverPush || [];
  const handleClick = () => {
    CleverPush.push(['isSubscribed', function(result) {
      console.log('CleverPush isSubscribed result', result); // true or false
      if(result === false){
        CleverPush.push(['subscribe', function(result) {
          console.log('CleverPush subscribe result', result); // true or false
        }]);
      } else {
        CleverPush.push(['unsubscribe', function(result) {
          console.log('CleverPush unsubscribe result', result); // true or false
        }]);
      }
    }])};
 
  
  return (
    <main>
      <h1>Welcome to CleverPush!</h1>
      <div onClick={handleClick}>
      <h2 >
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
     </div>
     <Button text={text}/>
      
            </main>
  );
}

export default App;
