import './App.css';
import { useState } from 'react';

function App() {
  const [num, setnum] = useState('');
  const [sessionNum, setsessionNum] = useState('');

  // #1 - LOCAL STORAGE
  // Usage - made a query, data isn't gonna change soon - we can hold onto it in local
  // or session storage. Rather than query again, we check to see if key exists.
  // Good place to keep a cart - itm ID isn't going to change, so you can reload the 
  // cart later. User can close laptop and still have their cart there
  // All data lives on client-side, so it's easier than session storage
  // Downside: Higher likelihood of getting out-of-sync with live data
  function setLocal() {
    localStorage.setItem("number", JSON.stringify({ test: Math.random() }));
    // Saves the key as "localnNumber" and value as an object like {"test":0.5714}
    //  localStorage.setItem("number", JSON.stringify(Math.random()) + " second value");
  }

  function getLocal() {
    const myNum = localStorage.getItem("number");
    console.log(typeof myNum);
    setnum(JSON.parse(myNum));
  }
  // In addition to setItem and getItem, we can use removeItem and clear (all items)
  // Always needs to be a string going in and out - use JSON.stringify/parse
  //  *--------------------------------------------------*

  // #2 Session storage
  // Like Local storage, is always key:value pair saved as a string
  // EXACTLY the same syntax as Local storage, just change "local" to "session":
  function setSession() {
    sessionStorage.setItem("sessionNumber", JSON.stringify({ test: Math.random() }));
  }

  function getSession() {
    const myNum = sessionStorage.getItem("sessionNumber");
    console.log(typeof myNum);
    setsessionNum(JSON.parse(myNum));
  }
  // Usage: when you don't want the data to persist beyond that session
  // you can duplicate the tab and have both values show in the new tab when you click
  // only the "get" button without setting a value
  // If you close both tabs, only the local storage will be persisted

  // *---------------------------------------------------*
  return (
    <div className="App">
      <header className="App-header">
        <h4>Local Number: {num?.test}</h4>
        <h4>Session Number: {sessionNum?.test}</h4>
        <button onClick={setLocal}>Set Num</button>
        <button onClick={getLocal}>Get Num</button>
        <button onClick={setSession}>Set Num</button>
        <button onClick={getSession}>Get Num</button>
      </header>
    </div>
  );
}

export default App;
