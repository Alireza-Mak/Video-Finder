/** @format */
import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <span className="d-block">Loading...</span>
      </div>
    );
  }

  return (
    <div className="card mb-3" style={{ width: '100%' }}>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="YouTube video player"
          frameBorder={0}
          className="embed-responsive-item"
          src={`https://www.youtube.com/embed/${video.id.videoId}?rel=0`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
