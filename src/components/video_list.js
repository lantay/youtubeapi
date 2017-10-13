import React from 'react';

const VideoList = (props) => { //props passed from index.js when put in return statement
  const videos=props.videos;
  //ح˚௰˚づ ح˚௰˚づ ح˚௰˚づyou can use bootstrap in react jsx ح˚௰˚づ ح˚௰˚づ ح˚௰˚づ

  return (
    //changed to col-xs instead of col-md 
    //className is how assign classes in react
    <ul className="col-xs-4 list-group"> </ul>
  )
}

export default VideoList;