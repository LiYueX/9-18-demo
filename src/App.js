import React, { PropTypes } from 'react';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

class App extends React.Component {
  render () {
    return(
      <div>
        <NavBar />
        <div>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
