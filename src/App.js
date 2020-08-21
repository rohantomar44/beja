import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const  app = props => {
const [personsState, setPersonState]=useState ({

  persons:[
    {name:'max' , age:'15'},
    {name:'manu' , age:'159'},
    {name:'step' , age:'105'}
  ],
    otherState:'abcd'

  
 });

const  switchNameHandler =(newName)=> {
  ///DON'T DO THIS this.state.persons[0].name="maxi";
  setPersonState(
    {
     persons: [
        {name:'maxi' , age:'15'},
        {name:'manu' , age:'159'},
        {name:'step' , age:'1088'}
      ]
    }
  )};


  
    return (
      <div className="App">
        <h1> hi, I'm there react app</h1>
        <p>this is really working!!!1</p>
        <button onClick={this.switchNameHandler.bind(this,'maximillan')}> switch</button>
        <Person
         name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person
         name={personsState.persons[1].name} age={personsState.persons[1].age}  click={this.switchNameHandler.bind(this,'max')} >my hobbies: racing </Person>
        <Person
         name={personsState.persons[2].name} age={personsState.persons[2].age} />        
      </div>
      );
      //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'does this work'));
  
  
    };

export default app;





  
 