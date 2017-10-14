//<!--================= importing and notes on importing ================-->

// ح˚௰˚づ  ○ code we write in other files won't mess 
//with our file unless we import it
// means we have to import react everywhere ح˚௰˚づ
import React, {Component} from 'react'; //so can just say 
//extends componenet instead of extends react.componenet

//ح˚௰˚づ  react dom is what connects react to the dom
import ReactDOM from 'react-dom';
//ح˚௰˚づ whenever write our own code have to give path
//but not when using libraries like above because node modules
//files won't have same name
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyDdTfaxaWIUIqbdxGgbFt5e0kfjrG2HQdQ';



//<!--================= render searchbar+notes ================-->
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

  // back when was functional componenet
    // const App = () => {
    //   return (
    //   //ح˚௰˚づ this stuff is jsx-->js xml --> js that makes html
    //   <div>
    //     <SearchBar/>
    //   </div>
    //   );
    // }
  class  App extends Component { //component bc imported,
    //could also do React.Component
    constructor(props) {
      super(props)
      //since this is a CLASS component need to mention with 
      //this.props if want to access props
      
      this.state= {
        videos: [],
        selectedVideo:null
      };

      this.videoSearch('surfboards');
      //-we moved the youtube stuff from here to below so have to do above so
      //it still gets called at the right time
      
      
    }

    videoSearch(term) {
      //<!--================= youtube api stuff================-->
      // ح˚௰˚づ downward data flow: only topmost componenet should
      //fetch data which is index.js ح˚௰˚づ

      YTSearch({key: API_KEY, term: term}, (videos) => { //same as function(data) {}
      //-function(data){}/(data)=>{} is a callback function with data you get back from
      //that call we just made
      //(data) can be whatever you want it to be-->changed to videos for shortcut
        this.setState({
          videos:videos,
          selectedVideo:videos[0]
        }) //same as videos:videos and works bc prop name the same-->es6

      //normally, component tries to render itself before this search is done
      });


    }
    render() {
      return (
      //ح˚௰˚づ this stuff is jsx-->js xml --> js that makes html
        <div>
          <SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList 
          //this below is that shortcut
          //it's passing in a function that sets the state when called
            onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
      //^VideoList videos is a prop and arrives as an argument to VideoList function
      //passing in videos to the list and just 1 video to videodetail
    );
  }
}



//<!--================= react render stuff+notes================-->

  // ح˚௰˚づ• webpack and babel together make bundle.js
//ح˚௰˚づ • component is a set of js functions that produces html
// javascript modules


//-Take component's generated HTML
// and put it on the page //(in the dom)
  //do by putting it in whatever the root of the app is
ReactDOM.render(<App />, document.querySelector('.container'));


            //????????things don't know????????
                //difference between class and instance