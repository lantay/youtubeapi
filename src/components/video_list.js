import React from 'react';
import VideoListItem from './video_list_item'
const VideoList = (props) => { //props passed from index.js when put in return statement
  // ح˚௰˚づprops only argument in FUNCTIONAL components
  // ح˚௰˚づ in class component available anywhere as this.props
  const videos=props.videos;
      //recommends map over for loops
    const videoItems= props.videos.map((video) => {
      return (
        <VideoListItem
          //pass prop passed from app (index.js) down again to VideoListItem
          //usually don't go more than 2 levels deep with this
          onVideoSelect={props.onVideoSelect} 
          key={video.etag}
          video={video} />
      //the key helps you know which video you need to update if need to update one
      //gives error if don't have
      //also better performance
      );
    });
  //ح˚௰˚づ ح˚௰˚づ ح˚௰˚づyou can use bootstrap in react jsx ح˚௰˚づ ح˚௰˚づ ح˚௰˚づ

  return (
    //changed to col-xs instead of col-md 
    //className is how assign classes in react


    //react recognizes videoItems as array and renders as <li> elements
    <ul className="col-md-4 list-group"> 
      {videoItems}
    </ul>
    //print out video list length in the ul
      // {props.videos.length} 
  );
};

export default VideoList;