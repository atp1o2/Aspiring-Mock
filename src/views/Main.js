import React, { Component } from 'react';
import Masthead from '../components/Masthead/Masthead';
import Footer from '../components/Footer/Footer';

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
