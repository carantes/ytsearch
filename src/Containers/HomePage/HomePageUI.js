import React from 'react';
import { Icon } from 'antd';
import styles from './styles.json';
import SearchBar from '../../Components/SearchBar';
import VideoList from '../../Components/VideoList';
import VideoDetail from '../../Components/VideoDetail';

const Wrapper = ({ children }) => (
  <div style={styles.wrapper}>
    { children }
  </div>
)

const Header = ({ children }) => (
  <div style={styles.header}>
      { children }
  </div>
)

const Detail = ({ children }) => (
  <div style={styles.detail}>
    { children }
  </div>
)

const HomePage = ({ videos, selectedVideo, handleChange, handleSearch, onVideoSelect }) => (
  <Wrapper>
    <Header>
      <h1 style={styles.headerH1}>
        YTSearch <Icon type={"search"}/>
      </h1>
      <SearchBar videos={videos} video={selectedVideo} onChange={handleChange} handleSearch={handleSearch}/>
    </Header>
    <Detail>
      <VideoDetail video={selectedVideo}/>
      <VideoList
          videos={videos}
          onVideoSelect={onVideoSelect}
      />
    </Detail>
  </Wrapper>
);

export default HomePage;