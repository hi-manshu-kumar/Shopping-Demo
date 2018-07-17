import React, { Component } from 'react';
import {SearchBar} from './childs/searchbar/Searchbar';
import {SearchList} from './childs/list/SearchList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {mobiles:[]};
    this.searchValue= '';
    this.searchPlaceHolder = 'Type To Search...';
  }
  takeInput(event) {
    this.searchValue = event.target.value;
  }
  doAjax(){
    const url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    fetch(url).then(response=>{
      response.json().then(data=>{
        console.log("Data is ",data);
        this.setState({mobiles:data.mobiles});
      }).catch(err=>{
        console.log("Invalid JSON ",err);
      })
    }).catch(err=>{
      console.log("Error in Ajax Call ",err);
    })
    console.log("Do Ajax call ",this.searchValue);
}

  render() {
    return (
      <div className="App">
        <h2>Shop Demo</h2>
        <SearchBar takechildInput= {this.takeInput.bind(this)} parentfn={this.doAjax.bind(this)} searchplaceholder={this.searchPlaceHolder}></SearchBar>
        <br/>
        <SearchList list={this.state.mobiles}></SearchList> 
      </div>
    );
  }
}

export default App;
