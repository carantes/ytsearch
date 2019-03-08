import React from 'react';
import { List } from 'antd';
import VideoListItem from '../VideoListItem';
import styles from './styles.json';

const EmptyList = () => (
  <List
    style={styles.emptyList}
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
      <ul style={styles.videoList}>
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