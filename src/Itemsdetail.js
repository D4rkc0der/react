import React, { Component } from 'react'
import Spinner from './components/Spinner'
export class Itemsdetail extends Component {

 
  state ={
    name:'',
    image:'',
    loading:false
  }

   getItems = async() =>{
    this.setState({
      loading:true
    });
    const {match} =this.props

    const data = await fetch(`https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`);

    const item =  await data.json();
    
    // return items;
    this.setState({
      name:item.name,
      image:item.images.background,
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
    } else
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.image} alt=""/>
      </div>
    )
  }
}

export default Itemsdetail
