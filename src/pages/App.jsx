import React, { Component } from "react";
import './App.css';
import Nav from "../components/Nav";
import logo from '../assets/rustic.jpg';
import reasonBackground from '../assets/alexandra-golovac-781067-unsplash.jpg';
import farmBackground from '../assets/erwan-hesry-640713-unsplash.jpg';
import techBackground from '../assets/rawpixel-778722-unsplash.jpg';

const styles = {
  paperContainer: {
    backgroundImage: `url(${logo})`
  }
};

const stylesReason = {
  imageContainer: {
    backgroundImage: `url(${reasonBackground})`
  }
};

const stylesFarm = {
  imageContainer: {
    backgroundImage: `url(${farmBackground})`
  }
};


const stylesTech = {
  imageContainer: {
    backgroundImage: `url(${techBackground})`
  }
};


class App extends Component {

  render() {
    return (
      <section>
        <nav className="nav">
          <h1 className='logo'>Precede</h1>
          <Nav></Nav>
        </nav>

        <section id="about" className='grid-block grid-intro grid-reason-background'  style={styles.paperContainer}>
          <div className="grid-intro-text">
            <h2 className="grid-title">Vertical Farming</h2>
            <p className="grid-text">Precede Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ap Precede Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ap</p>
          </div>
        </section>

        <section id="reason" className='grid-block grid-reason'>
          <div className='grid-reason-text'>
            <div className='grid-body-container'>
              <h2 className='grid-reason-title'>Our Reason</h2>
              <ul  className='grid-body-text'>Increasing demand straining our current system
                <li>9 billion by 205 by 70%0</li>
                <li>increase by 70% by 70%</li>
                <li>9 billion by 2050by 70% </li>
                <li>increase by 70%</li>
              </ul>
            </div>
          </div>
          <div className='grid-reason-background'  style={stylesReason.imageContainer}></div>
        </section>

        <section className="grid-mission">
          <h2 className="grid-mission-title">Our Mission</h2>
          <h4 className="grid-mission-text">With a focus <span className="italic">on</span>  consistency <span className="italic">and</span> reliablity <span className="italic"><br/>
the</span> safety <span className="italic">of</span> our food</h4>
        </section>
        <section id="strengths" className='grid-block grid-reason'>

            <div className='grid-reason-background grid-order-top' style={stylesFarm.imageContainer}></div>

          <div className='grid-reason-text grid-order-bottom'>
            <div className='grid-body-container'>
            <h2 className='grid-reason-title'>Our Farm</h2>
              <p className='grid-body-text'>At our farm in Ang Mo Kio, we produce a wide variety of greens grown only with the best seeds & soil, nutrition and the perfect climate.

            Giving always the best what the plants want, we also ensure never to use any pesticides or fungicides.

            We do not compromise on how we produce the best food for you and your loved ones</p></div>
          </div>
        </section>

        <section id="offer" className='grid-block grid-reason'>
          <div className='grid-reason-text '>
            <div className='grid-body-container'>
              <h2 className='grid-reason-title'>Our Technology</h2>
              <ul className='grid-body-text'>
                <li>Have a de</li>
                <li>increase by 70% by 70%</li>
                <li>9 billion by 2050by 70% </li>
                <li>increase by 70%</li>
              </ul>
            </div>
          </div>

          <div className='grid-reason-background'  style={stylesTech.imageContainer}></div>
        </section>

      </section>
    );
  }
}
export default App;
