import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players = ['Marcus Trescothik','Habibul Bashar','Shakib Al Hasan', 'Virat Kohli', 'Tamim Iqbal', 'Chris Gayle', 'Joe Root','Ben Stokes'];
  const products  = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'},
    {name:'Premier EL', price:'$249.99'}
  ]

  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>React Project</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            players.map(player => <li>{player}</li>)
          }
          
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count+1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(Math.max(0,count-1))}>Decrease: </button>
      <button onClick={() => setCount(count+1)}>Increase: </button>
    </div>
  )
}




function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      
      <ul>
        {
          users.map(user => <li>{user.name}  --:-- Email: {user.email} </li>)
        }
      </ul>
    </div>
  )
}



function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor:'Lightgray',
    height:'200px',
    width:'200px',
    float:'left',
    color: 'black'
  }

  return(
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h5> {props.product.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  const personStyle = {
    border: '2px solid tomato',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Role: {props.role}</h2>
    </div>
  )
}



export default App;
