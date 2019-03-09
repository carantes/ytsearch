import React, { Component } from 'react';
import  { AutoComplete, Button, Icon } from 'antd';
import styles from './SearchBar.module.css';
const Option = AutoComplete.Option;

class SearchBar extends Component {
  
  state = {
    videos: []
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.video && prevProps.video !== this.props.video) {
      this.setState({ videos: this.props.videos })
    }
  }

  onSelect = (value, index) => {
    let val = parseInt(index.key, 10);
    this.props.handleSearch(val);
  };

  render() {
    return (
      <div className={styles.container}>
        <AutoComplete
          size={"large"}
          className={styles.autocomplete}
          onSelect={this.onSelect}
          onChange={this.props.onChange}
          placeholder="Search here"
        >
          { this.state.videos.map((video, index)  => <Option key={ index } >{ video.snippet.title }</Option> ) }
        </AutoComplete>
        <Button className={styles.button} size={"large"}>
          <Icon type={"search"}/>
        </Button>
      </div>
    );
  }
}

export default SearchBar;