import React, { Component } from 'react';
import Masthead from '../components/masthead/Masthead';
import Footer from '../components/Footer';
import IdentityProvider from '../components/Identity/IdentityProvider';

class Main extends Component {
  render () {
    return (
      <IdentityProvider>
        <Masthead />
        <main className="main">
          {this.props.children}
        </main>
        <Footer />
      </IdentityProvider>
    );
  }
}

export default Main;
