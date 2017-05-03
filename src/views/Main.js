import React, { Component } from 'react';
import Masthead from '../components/masthead/Masthead';
import Footer from '../components/Footer';

class Main extends Component {
  render () {
    return (
      <div>
        <Masthead />
        <main className="main">
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
