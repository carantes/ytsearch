import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import YTSearch from 'youtube-api-search';
import { notification } from 'antd';

const API_KEY = process.env.REACT_APP_API_KEY;
let lastTimeoutId;

class HomePageWrapper extends Component {
  state = {
    videos: [],
    search: true,
    selectedVideo: null
  }
  
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
    const { render } = this.props
    const { videos, selectedVideo } = this.state;
    
    return (
      <Fragment>
        {
          render({
            videos: videos,
            selectedVideo: selectedVideo,
            handleChange: this.handleChange,
            handleSearch: this.handleSearch,
            onVideoSelect: this.onVideoSelect
          })
        }
      </Fragment>
    )
  }
}

HomePageWrapper.propTypes = {
  render: PropTypes.func.isRequired,
}

export default HomePageWrapper