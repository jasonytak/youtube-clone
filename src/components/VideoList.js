import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, selectVideo}) => {
  if (!videos) {
    return <div>Loading...</div>;
  }
  const renderList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        selectVideo={selectVideo}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
