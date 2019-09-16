import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import About from './About';
import NavBar from './components/Navbar';
import Shop from './Shop';
import Itemsdetail from './Itemsdetail';
function App() {

  



  return (
    <Router>
    <div className="App">
    <NavBar/>
      <Switch>
       <Route path="/" exact component={Home}/>
       <Route path="/about" component={About}/>
       <Route path="/shop" exact component={Shop}/>
       <Route path="/shop/:id" exact component={Itemsdetail}/>
      </Switch>
   
    </div>
    </Router>
  );
}
const Home =() =>{
  return (
    <div>
      <h1>This is the Home Page</h1>
    </div>
  )
}

export default App;
