// ح˚௰˚づ  ○ code we write in other files won't mess 
//with our file unless we import it
// means we have to import react everywhere ح˚௰˚づ
import React from 'react';
//ح˚௰˚づ  react dom is what connects react to the dom
import ReactDOM from 'react-dom';
//ح˚௰˚づ whenever write our own code have to give path
//but not when using libraries like above because node modules
//files won't have same name
import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyDdTfaxaWIUIqbdxGgbFt5e0kfjrG2HQdQ';

//-Create a new componenet. Should produce some html
//-this is like a factory that creates a componenet
//non es6
  // const App = function () {
  //   return <div>Hi!</div>;
  // }

// back when rendered "hi"
  // const app = () => {
  //   return <div>Hi!</div>;
  // }

const App = () => {
  return (
  //ح˚௰˚づ this stuff is jsx-->js xml --> js that makes html
  <div>
    <SearchBar/>
  </div>
  );
}
  // ح˚௰˚づ• webpack and babel together make bundle.js
//ح˚௰˚づ • component is a set of js functions that produces html
// javascript modules


//-Take component's generated HTML
// and put it on the page //(in the dom)
  //do by putting it in whatever the root of the app is
ReactDOM.render(<App />, document.querySelector('.container'));

            //????????things don't know????????
                //difference between class and instance