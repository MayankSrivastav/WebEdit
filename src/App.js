import React, { Component } from 'react';
import './App.css';

import Header from './Header';
import EditorPane from './EditorPane';
import Console from './Console';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }

  handleCodeChange() {
    // TODO: call the js interpreter
    // through service worker
    return;
  }

  render() {
    return (
      <div className="App">
        <div className="editor">
          <Header />
          <EditorPane 
            ref="editorPane"
            onChange={this.handleCodeChange}
            value={`console.log("Hello, World!!!");`} />          
        </div>
        <Console />       
      </div>
    );
  }
}

export default App;
