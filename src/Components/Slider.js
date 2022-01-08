import React from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import martwa1 from '../martwa1.jpg';
import martwa2 from '../martwa2.jpg';
import martwa3 from '../martwa3.jpg';


export default function Slider(){
    return(
  <Carousel variant="dark">
      <Carousel.Item style={{'height' : '600px'}}>
          <img className="d-block img-fluid" src={martwa1} alt="jnebrg"/>
          <Carousel.Caption style={{color: 'black'}}>
              <h3>Moje prace</h3>
              <p>Więcej informacji w sekcji spis rysunków</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height' : '600px'}}>
          <img className="d-block img-fluid" src={martwa2} alt="jnebrg"/>
          <Carousel.Caption>
              <h3>Moje prace</h3>
              <p>Więcej informacji w sekcji spis rysunków</p>
          </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height' : '600px'}}>
          <img className="d-block img-fluid" src={martwa3} alt="jnebrg"/>
          <Carousel.Caption>
              <h3>Moje prace</h3>
              <p>Więcej informacji w sekcji spis rysunków</p>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
    )
}