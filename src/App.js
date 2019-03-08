import React, { Component } from 'react';
import './App.css';
import { Icon, notification } from 'antd';
import dotenv from 'dotenv';
import YTSearch from 'youtube-api-search';
import HomePage from './Containers/HomePage';

dotenv.config();
const API_KEY = process.env.REACT_APP_API_KEY;
let lastTimeoutId;

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      search: true,
      selectedVideo: null
    }

    this.welcome();
  }

  welcome = () => notification.open({
    message: 'Hey nice to see you here',
    description: 'Let us start by searching for some videos',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />
  });

  onVideoSelect = (video) => {
    this.setState({ 
      selectedVideo: this.state.videos[ video ] 
    })
  }

  videoSearch(term) {
    if (this.state.search) {
        YTSearch({ key: API_KEY, term }, data => {
            try {
                if( data && data.data && data.data.error.message ) {
                    console.error(data);
                    return;
                }
                this.setState({ videos: data, selectedVideo: data[0] });
                console.log( this.state.videos );
            } catch( err ){
                notification['error']({
                    message: "Daily Limit Exceeded",
                    description: "Youtube data API daily limit have exceeded. Quota will be recharged at 1:30pm IST. Wait till then.",
                })
            }
        });
     }
  }

  handleChange = (value) => {
    clearTimeout(lastTimeoutId);

    lastTimeoutId = setTimeout(() => {
      if (value === '') {
        this.setState({ videos: [], selectedVideo: null });
        return;
      }

      if (this.state.search) {
        this.videoSearch(value);
      }

      setTimeout(() => {
        this.setState({ search: true });
      }, 5000);

    }, 2000);
  }

  handleSearch = (video) => {
    this.setState({ 
      selectedVideo: this.state.videos[video],
      search: false 
    })
  }
  
  render() {
    const { videos, selectedVideo } = this.state;

    return (
      <HomePage
        videos={videos}
        selectedVideo={selectedVideo}
        handleChange={this.handleChange}
        handleSearch={this.handleSearch}
        onVideoSelect={this.onVideoSelect}
      />
    );
  }
}

export default App;
