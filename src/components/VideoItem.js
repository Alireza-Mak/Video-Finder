/** @format */

import React from 'react';
import './VideoItem.css'

// Create a Function for Limite  Title
export const limitTitle = (title, limit = 16) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((num, currentTitle) => {
      if (num + currentTitle.length <= limit) {
        newTitle.push(currentTitle);
      }
      return num + currentTitle.length;
    }, 0);
    return `${newTitle.join(' ')} ...`;
  }
  return title;
};

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="videoItem bg-secondary rounded mb-3 d-flex flex-row align-items-center justify-content-start border-bottom "
      style={{ width: '100%' }}
    >
      <img
        src={video.snippet.thumbnails.high.url}
        className="p-3 rounded-circle"
        width={100}
        height={100}
        alt={video.snippet.title}
      />
      <div className='pr-3'>
        <h5 className="card-title text-light">
          {limitTitle(video.snippet.title)}
        </h5>
        <p className="card-text text-light">
          {limitTitle(video.snippet.description)}
        </p>
      </div>
    </div>
  );
};

export default VideoItem;
