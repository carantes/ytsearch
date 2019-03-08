import React from 'react'
import HomePageUI from './HomePageUI';
import HomePageWrapper from './HomePageWrapper';

const HomePage = () => (
  <HomePageWrapper
    render={
      ({ videos, selectedVideo, handleChange, handleSearch, onVideoSelect }) => (
        <HomePageUI
          videos={videos}
          selectedVideo={selectedVideo}
          handleChange={handleChange}
          handleSearch={handleSearch}
          onVideoSelect={onVideoSelect}
        />
      )
    }>
  </HomePageWrapper>
)

export default HomePage;