import React from 'react';
import { Icon } from 'antd';
import styles from './HomePage.module.css';
import SearchBar from '../../Components/SearchBar';
import VideoList from '../../Components/VideoList';
import VideoDetail from '../../Components/VideoDetail';

const Wrapper = ({ children }) => (
  <div className={styles.wrapper}>
    { children }
  </div>
)

const Header = ({ children }) => (
  <div className={styles.header}>
      { children }
  </div>
)

const Detail = ({ children }) => (
  <div className={styles.main}>
    { children }
  </div>
)

const HomePage = ({ videos, selectedVideo, handleChange, handleSearch, onVideoSelect }) => (
  <Wrapper>
    <Header>
      <h1>
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