import React from 'react'

// this code is for promise and then catch 
// function Fetches () {
//     console.log('Fetch API')
//     const api = fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(function(res){
//         console.log(res,"res");
//     })
//     console.log(api,"API");

    
//     return(
//     <div>
//     </div>

//     );
    
// }

//Code is for get data from api using asyn await
// async function Fetches () {
//     const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(api,"API")

//     const json = await api.json();
//     console.log(json,"json")
//     return(
//         <div>
//             Hello
//         </div>
//     )
// }

// Fetches();

async function Fetches () {
    const api = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        //json.strignify convert the data into string
        body: JSON.stringify({
            title: 'NAZIMMMMMM',
            body:'Practice',
            userId: '1101'
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        } 
    })
    
    console.log(api,"api");
    const json = await api.json();
    console.log(json,"json"); 
    return(
        <div></div>
    )
}

Fetches();

export default Fetches;