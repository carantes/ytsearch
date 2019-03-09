import React from 'react';
import { Icon } from "antd";
import styles from './VideoDetail.module.css';

const EmptyState = () => (
  <div className={styles.emptyState}>
    <h1><Icon type={"youtube"}/></h1>
  </div>
)

const VideoDetail = ({ video }) => {
  if (!video) {
    return <EmptyState />
  }
  else {
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${ videoId }`;

    return (
      <div>
        <div className={"embed-responsive embed-responsive-16by9"}>
            <iframe title={ video.snippet.title } className={"embed-responsive-item"} src={url} allowFullScreen />
        </div>
        <div>
            <h2>
                { video.snippet.title }
            </h2>
            <div>
                { video.snippet.description }
            </div>
        </div>
      </div>
    )
  }
}

export default VideoDetail;