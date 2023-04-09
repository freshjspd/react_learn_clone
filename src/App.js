import './App.css';
import React, { Component } from 'react';
import User from './Components/User';

export default class App extends Component {
  constructor(props){ 
    super(props); 
    this.state = {
        name: 'John',
        surname: 'Adson',
        age: 20,
        isSelected: false,
    };
  }

  select = () => {
    const {isSelected} = this.state;
    this.setState({isSelected: !isSelected});
  }

   render() {
    const {name, surname, age, isSelected} = 
    this.state;
    return (
      <>
        <User 
          name={name} 
          surname={surname} 
          age={age} 
          isSelected = {isSelected}
          select={this.select}/>
      </>
    );
  }
}


