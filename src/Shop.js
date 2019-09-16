import React, { Component,Fragment } from 'react'
import Spinner from './components/Spinner'
import {Link} from 'react-router-dom';


class Shop extends Component {

  state ={
    items:[],
    loading:false
  }

   getItems = async() =>{
    this.setState({
      loading:true
    })
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');

    const items =  await data.json();
  
    this.setState({
      items:items.items,
      loading:false

    });
    

  }
  componentDidMount(){
    this.getItems();
  }

  render() {

    if(this.state.loading===true){
      return (
        <div>
        <Spinner/>
      </div>
      )
         
    }else{
    return (
      <div>
        <h1>Shop from the items below</h1>
        <div style={{display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      gridGap:"30px",
      width:"50%",
      margin:"auto",
      padding:"2rem 0"}}>
            {this.state.items.map(item=>(
              <Fragment key={item.itemid}>
              <Link  to={`/shop/${item.itemid}`} style={{color:"white",
        textDecoration:"none",
        padding:"1rem",
        background:"#3498db"}}>{item.name}</Link>
              
              </Fragment>
              
            ))}

        </div>
        
      </div>
    )}
  }
}

export default Shop
