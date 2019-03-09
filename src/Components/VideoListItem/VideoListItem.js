import React from 'react';
import styles from './VideoList.module.css';

const VideoListItem = ({ video, onUserSelected }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  return (
    <li onClick={onUserSelected} className={styles.listItem}>
      <div>
          <img src={ imageUrl } alt={videoTitle}/>
          <span >{videoTitle}</span>
      </div>
    </li>
  );
};

export default VideoListItem;
