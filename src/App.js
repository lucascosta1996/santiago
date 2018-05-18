import React, { Component } from 'react';
import arrow from './icons/arrow.png';
import facebook from './icons/facebook.png';
import instagram from './icons/instagram.png';
import imagesSlide from './Slideshow';
import './App.css';

class App extends Component {
  state = {
    activeIndex: 0
  }

  render() {
    return (
      <div className="container">
        <header>
        <nav>
          <h1>Santiago Roza</h1>
            <ul>
                  <li>Paintings</li>
                  <li>Murals</li>
                  <li>Woodcut</li>
            </ul>
            <section>
              <img src={facebook}/>
              <img src={instagram}/>
            </section>
        </nav>
        <div className="photoInfo">
            <article>
              <h2 id="title">First one</h2>
              <p id="technique">Acrilyc on canvas</p>
            </article>
            <section className="arrows">
              <img className="left"id="left" src={arrow} onClick={ (event)=> this.jumpToSlide(index) } />
              <img id="right" src={arrow}/>
            </section>
        </div>
      </header>

      </div>
    );
  }
}

export default App;
