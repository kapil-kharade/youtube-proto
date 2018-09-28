import React from 'react';
import VideoItem from './video_item';
import { Row, Col } from 'reactstrap';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return <Col xs="3" key={video.etag}>
      <VideoItem video={video} />
    </Col>
  });
  return <div>
    <Row>
      {videoItems}
    </Row>
  </div>
}

export default VideoList;