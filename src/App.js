import React, { Component } from 'react';
import { Icon, notification } from 'antd';
import dotenv from 'dotenv';
import HomePage from './Containers/HomePage';
import './App.css';

dotenv.config();

class App extends Component {

  constructor(props) {
    super(props); 
    this.welcome();
  }

  welcome = () => notification.open({
    message: 'Hey nice to see you here',
    description: 'Let us start by searching for some videos',
    icon: <Icon type="smile" style={{ color: '#108ee9' }} />
  });
  
  render() {
    return <HomePage />
  }
}

export default App;
