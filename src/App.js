import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  
  const style={
        
    color: 'red',
    fontSize: '30px'
  }


 const men=['tawhid' , 'yasin', 'shanto' , 'suhan', 'efad', 'fahad', 'asib']

 const products=[
  {name: "Photoshop" , price: "10.99 "},
  {name: "Ilustetor" , price: "7.99 "},
  {name: "Pdf reeder" , price: "5.99 "}
 ]
  
  return (
    <div className="App">
      <header className="App-header">

      <ul>

      {
        men.map(man=><li>{man}</li>)
      }

      {
        products.map(pd=> <li>{pd.name} {pd.price}</li>)
      }



      </ul>

       


      {
        products.map(pds=> <Product Product= {pds}> </Product>)
      }

       <Users></Users>
       <Counter></Counter>
       <Product Product={products[0]}></Product>
       <Product Product={products[1]}></Product>
       <Product Product={products[2]}></Product>

       <Person name={men[1]} job="mawlana" add="bangladesh"></Person>
       <Person name={men[0]} job = "smart boy" add= "london"></Person>
       <Person name="shanto" job = "webdevoloper" add="jarman"></Person>
       <Person name = "suhan" job ="student" add="india"></Person>
       
      </header>
    </div>
  );
}

export default App;



function Users() {
  
  const [user , setUsers] = useState([]);
  useEffect(() => {
     
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data=> setUsers(data))
    


  }, [])


  return(
    <div>
     
    
     <ul>
      
      {
        user.map(users=> <li>{users.name} {users.phone}</li>)
      }

     </ul>
    
      
      <h1>daynamik user {user.length}</h1>
    </div>
  )



}











function Counter() {
 
  const [count, setCount]=useState(0)
  const handleclick=()=>setCount(count + 1)
  const handleminas=()=>setCount(count- 1)

 
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onMouseMove={handleclick}>Incres</button>
      <br />
      <button onMouseMove={handleminas}>decrees</button>
    </div>
  )
}






function Product(props) {
 
  const {name, price}=props.Product


  return(
    <div className='productstyle'>
     
     <h3>Name: {name}</h3>
     <h4>Price: {price}</h4>
     <button>Bye now</button>


    </div>
  )
}





function Person(props) {
  return( 
  <div className='profile'>
  <h1> Name : {props.name}</h1>
  <h2>profation: {props.job}</h2>
  <h2>Adrees : {props.add}</h2>

  </div>
  
  )
}

