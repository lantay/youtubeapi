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
    // ح˚௰˚づ think state when want to update component
    //-Each class has a state object--functional componenets do not have state
    //-used to record/react to user events
    //-when state is changed componenet immediately rerenders
      //and rerenders all children  
    //-set state inside of constructor of class
  
  //constructor called at beginning of component's life--when new instance created (different than rendering)
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
      <div className="search-bar">
        <input 
          value={this.state.term} //this line allows state and value to stay in sync
          //old before added the onInputChange method
             /* onChange = {(event) => this.setState({term: event.target.value})}  */
          
          onChange={event =>this.onInputChange(event.target.value)}
          placeholder="Search"
        />
      
      
      </div>
      //deleted value of input part
        // Value of the input: {this.state.term}
     //"Value of input" is plain text bc in jsx
      //-can reference state with this.state.term just don't
      //try to change that way
      // ح˚௰˚づ ح˚௰˚づTHIS WAS A SIMPLE EXAMPLE FOR STATE ح˚௰˚づ ح˚௰˚づ
        //     -on the change, this.setState is called to change the state and takes the event object which is called when an event such as typing happens and saves the value of the input which is stored into event in the state
        //     -then plain text saying "Value of input" is displayed and this.state.term is displayed in jsx brackets.
        // whenever want to change a component, think state.
        // return (
        //   <div>
        //     <input onChange = {(event) => this.setState({term: event.target.value})} />;
        //   Value of the input: {this.state.term}
        //   </div>
        // );
     //ح˚௰˚づless code way to do above so don't need onInputChange
      //(this was back in the console.log version)

      // return <input onChange={(event) => console.log(event.target.value)} />;
      //with single arg can also drop parentheses from event
        // return <input onChange={event => console.log(event.target.value)} />;
    
    
      
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
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
                       //onInputChange as it is in lesson 38 and below is an event right?
                          //  onInputChange(term) {
                          //   this.setState({term});
                          //   this.props.onSearchTermChange(term);
                          // }
                       //??why did event method break when started setting
                       //state with it?
                       //don't completely understand event object
                       