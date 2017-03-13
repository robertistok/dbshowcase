import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ModalConductor from './Modals/ModalConductor';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className='container'>
          {this.props.children}
          <ModalConductor />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
