import React from 'react';

const VideoListItem = ({ video }) => { //would normally put
  //props as the arg, now putting {video} which grabs video
  //from props so don't need below line
  // const video=props.video;

  // console.log(video)

const imageUrl= video.snippet.thumbnails.default.url; 
//^this is just from the video object grabbing from yg
  return (
    //lots of bootstrap here
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;