import React, { Component } from 'react';
import Header from './Header';
import './App.css';

class Console extends React.Component {
  render() {
    return (
      <div className="console">
          <Header />
          <div id="console"></div>
      </div> 
    );
  }
}

export default Console;