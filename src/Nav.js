import React, { Component } from 'react';
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import arrow from './icons/arrow.png';

class Nav extends Component {
  render(){
    return (
      <nav>
        <h1>Santiago Pooter</h1>
          <ul>
                <li>Paintings</li>
                <li>Murals</li>
                <li>Engravings</li>
          </ul>
          <div className="social">
            <a href="https://www.facebook.com/P%C3%A1gina-Santiago-Pooter-1064572753589162/"><img src={facebook}/></a>
            <a href="https://www.instagram.com/santoculto/"><img src={instagram} className="marginLeft"/></a>
          </div>
          <div className="arrows">
                <img src={arrow} className="left" onClick={this.props.previous} alt="Previous slide"/>
                <img src={arrow} onClick={this.props.next} alt="Previous slide"/>
          </div>
      </nav>
    );
  }
}

export default Nav;
