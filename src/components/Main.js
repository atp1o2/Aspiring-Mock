import React, { Component } from 'react';
import Masthead from './masthead/Masthead';
import Footer from './footer/Footer';

class Main extends Component {
  render () {
    return (
      <div>
        <Masthead />
        <main>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
