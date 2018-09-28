import React from 'react';
import '../styles/video_item.css';

const VideoItem = ({ video }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return <div>
    <div className="card mb-4 shadow-sm">
      <img className="card-img-top imgContainer" src={imageUrl} data-holder-rendered="true" />
      <div className="card-body">
        <p className="card-text">{video.snippet.title}</p>
      </div>
    </div>
  </div>
}

export default VideoItem;