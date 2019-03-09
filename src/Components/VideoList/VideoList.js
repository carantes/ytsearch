import React from 'react';
import { List } from 'antd';
import VideoListItem from '../VideoListItem';
import styles from './VideoList.module.css';

const EmptyList = () => (
  <List
    className={styles.emptyList}
    size={"large"}
    header={<div>Video Suggestions</div>}
    bordered
    dataSource={[]}
    renderItem={item => (<List.Item>{item}</List.Item>)}
  />
);

const VideoList = ({ videos, onVideoSelect }) => {
  if (videos.length === 0) {
    return <EmptyList />
  }
  else {
    return (
      <ul className={styles.videoList}>
        {
          videos.map((video, index) => (
            <VideoListItem
                key={index}
                video={video}
                onUserSelected={onVideoSelect.bind( this, [ index ]) }
            />
          ))
        }
      </ul>
    )
  }
}

export default VideoList;