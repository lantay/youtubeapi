// ح˚௰˚づ lets us just say extends Componenet instead of 
//extends React.Componenet
//could also just do const Component=react.component
import React, {Component } from 'react';
//ح˚௰˚づ below translates from jsx to react.createelement so have to import
//react

//ح˚௰˚づthis is called a function componenet because just one function
// instead of a class
// function component version
  // const SearchBar = () => {
  //   return <input />;
  // }

//buuuut needs to be able to tell what people type
//ح˚௰˚づ use functional componenet unless need a class

//class is a js object with methods and such
class SearchBar extends Component { //Component here is React.Component which got from importing React {Componenet}
  //every class has a render method to make the jsx come out
  //render is a method and has to be there

  // ح˚௰˚づح˚௰˚づ STATE ح˚௰˚づح˚௰˚づ //
    //-Each class has a state object--functional componenets do not have state
    //-used to record/react to user events
    //-when state is changed componenet immediately rerenders
      //and rerenders all children  
    //-set state inside of constructor of class
  constructor(props) {
    super(props); //super just calls the parent method, just call it
    //-initialize state with new object assigned to this.state
    //-that object contains properties want to record on state
      //(term is a property)
    
    this.state= { term: ''}; //this is only time we do this.state
    //=, all other times do this.setstate
  }



  render () {
    

      
    //-doing the onChange={...} there makes it emit that onInputChange
    //event
    //-onChange is a property built into react that makes something
    //happen whenever there is a change
    return (
      <div>
        <input onChange = {(event) => this.setState({term: event.target.value})} />;
      Value of the input: {this.state.term}
      </div>
      //"Value of input" is plain text bc in jsx
      //-can reference state with this.state.term just don't
      //try to change that way
      
     //ح˚௰˚づless code way to do above so don't need onInputChange
      //(this was back in the console.log version)

      // return <input onChange={(event) => console.log(event.target.value)} />;
      //with single arg can also drop parentheses from event
        // return <input onChange={event => console.log(event.target.value)} />;
    
    
      
    );
  }
  
  
  //way of doing the set state function with an event; broke when started setting state
    // //this is an event
    // //ح˚௰˚づ this is good naming
    // onInputChange(event) { //-that event parameter
    //   //could be named anything we want it to and always refers
    //   //to the event handler which has a lot of stuff
    //   //including what happens to input
    //   //-below gets value of <input/> and puts it in state
    //   //-˚௰˚づ this is how you set the state
    //   this.setState({term: event.target.value});
    //   //console.log version
    //     // console.log(event.target.value); 
    // }
}

export default SearchBar;
//ح˚௰˚づ ^makes it so other things can grab the searchbar
//componenet we just made

                       //????????things don't know????????
                       //??why did event method break when started setting
                       //state with it?
                       //don't completely understand event object
                       