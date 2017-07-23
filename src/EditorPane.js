import React, { Component } from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class EditorPane extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      codeBuffer: this.props.value
    };
  }

  handleChange(codeBuffer) {
    // TODO: change the state with
    // editor changes
    this.setState({
      codeBuffer: codeBuffer
    });
    
    this.props.onChange();
  }

  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="App"
        onLoad={this.onLoad}
        onChange={this.onChange}
        fontSize={14}
        height="90vh"
        width="60vw"
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={this.state.codeBuffer}
        editorProps={{$blockScrolling: true}}
        onChange={this.handleChange}
      />
    );
  }
}

export default EditorPane;