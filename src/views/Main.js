import React, { Component } from 'react';
import { Page } from 'hedron';
import Masthead from '../components/masthead/Masthead';
import Footer from '../components/footer/Footer';

class Main extends Component {
  render () {
    return (
      <div>
        <Masthead />
        <main>
          <Page>
            {this.props.children}
          </Page>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Main;
