import React from 'react';
import styles from './styles.json';

const VideoListItem = ({ video, onUserSelected }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;
  return (
    <li onClick={onUserSelected} style={styles.listItem}>
      <div style={styles.wrapper}>
          <img src={ imageUrl } alt={videoTitle}/>
          <span style={styles.title}>{videoTitle}</span>
      </div>
    </li>
  );
};

export default VideoListItem;
