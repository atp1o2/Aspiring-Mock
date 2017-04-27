import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Grid, Row, Col, Nav } from 'react-bootstrap';
import Brand from '../styles/variables';
import FacebookIcon from '../img/icons/facebook.svg';
import TwitterIcon from '../img/icons/twitter-alt.svg';

const FooterStyle = styled.footer`
  bottom: 0;
  height: 10rem;
  width: 100%;
  left: 0;
  padding-top: 5rem;
  margin-top: 5rem;
  text-align: center;
  color: ${Brand.grey};
  ul {
    padding-top: 1rem;
    display: -webkit-inline-box
  }
  img {
    margin: 1rem;
    max-width: 5rem;
    max-height: 5rem;
    margin-bottom: 2rem;
  }
`;

class Footer extends Component {
  render () {
    return (
      <FooterStyle>
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
              <Nav>
                <a href="https://explore.careerscope.com/" target="_blank">Explore</a>
                <Link to="Mission">
                  Mission
                </Link>
                <Link to="FAQ">
                  FAQ
                </Link>
              </Nav>
          </Col>
          <Col xs={12} sm={4} smPush={4}>
            <Nav>
              <Link to="DMCA">
                DMCA
              </Link>
              <Link to="Terms-Of-Use">
                Terms
              </Link>
              <Link to="Private-Policy">
                Privacy
              </Link>
            </Nav>
          </Col>
          <Col xs={12} sm={4} smPull={4}>
            <Link to="/"><img src={FacebookIcon} alt="CareerScope Facebook"/></Link>
            <Link to="/"><img src={TwitterIcon} alt="CareerScope Twitter"/></Link>
            <p>©Copyright 2016 by CareerScope, inc</p>
          </Col>
        </Row>
        </Grid>
      </FooterStyle>
    );
  }
}

export default Footer;
