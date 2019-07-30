import './Slider.css'
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel >
    <Carousel.Item>
      <img
        className="image"
        src='http://www.siesgst.edu.in/assets/home/new/sih_winners.jpg'
        alt="Third slide"

      />
      <Carousel.Caption>
        <h3>Smart India Hackathon</h3>
        <p> The team won Special recognition and consolation prize from Ministry of Civil Aviation in the AICTE organised "Smart India Hackathon 2019" 
          for the problem statement given by Ministry of Civil Aviation,held at Satyabhama university Chennai.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="image"
        src="http://www.siesgst.edu.in/assets/home/cricket_team.JPG"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Sports </h3>
        <p>The cricket team has set many records and also won many inter college and university tournaments </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="image"
        src="http://www.siesgst.edu.in/assets/home/baja.jpg"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3> BAJA Team : Team Turbocrafters - ASURA 3.0</h3>
        <p>Our budding mechanical engineers display their competence
          at various National level ATV building Competitions.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
}



export default Slider;