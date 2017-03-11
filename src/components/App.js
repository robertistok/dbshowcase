import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='container'>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
