// import Fetches from './fetch.js'
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  //if we want to show the data on DOM so use usestate otherwise use simple function
  const [repos, setRepos] = useState([{}]);

  // 'https://api.github.com/users/nazimfirdousali/repos'
  useEffect(() => {

    async function getRepos() {
      const response = await fetch('https://api.github.com/users/nazimfirdousali/repos');
      const data = await response.json();
      console.log(data);
      setRepos(data)
    }

    getRepos();






    //THIS IS BY SIMPLE METHOD 
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then(response => response.json())
    // .then(json => {
    //   console.log(json);
    //   setData(json);
    // })

  }, [])

  return (
    <div className="App">
      <h1>Hello World from GITHUB of Nazim  </h1>
      <ul>
        {repos.map((repoObj, index) => {
          return (
            <li key={index}>
              {repoObj.name}
              
            </li>
          )
        })}
      </ul>
      {/* <Fetches></Fetches> */}
    </div>
  );
}

export default App;
