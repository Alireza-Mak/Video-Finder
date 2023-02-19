/** @format */

import React, { useState } from 'react';
import VideoItem from './VideoItem';
import Buttons from './Buttons';

const VideoList = ({ result, selectedVideo }) => {
  const [page, setPage] = useState(1);
  const [resultPerPage] = useState(5);
  const start = (page - 1) * resultPerPage;
  const end = page * resultPerPage;
  const renderList = result.slice(start, end).map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={selectedVideo}
        video={video}
      />
    );
  });
  const renderGoto = (goTo) => {
    setPage(goTo);
  };

  return (
    <div>
      {renderList}

      <Buttons
        page={page}
        resPerPage={resultPerPage}
        numResults={result.length}
        pageGoTo={renderGoto}
      />
    </div>
  );
};

export default VideoList;
