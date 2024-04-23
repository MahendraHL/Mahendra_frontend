import Carousel from 'react-bootstrap/Carousel';
import Photo1 from './Images/Photo1.jpg';
import Photo2 from './Images/Photo2.jpg';
import Photo3 from './Images/Photo3.jpg';

function Carousels() {
  return (
    <Carousel interval={3000} className='d flex align-items-center justify-content-center'>
      <Carousel.Item>
        <img className="d-block" src={Photo1} alt="First Slide" style={{width:'70%',margin:'auto'}}/>
      </Carousel.Item>
        <Carousel.Item>
        <img className="d-block" src={Photo2} alt="Second Slide" style={{width:'70%',margin:'auto'}}/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="d-block" src={Photo3} alt="Third Slide" style={{width:'70%',margin:'auto'}}/>
      </Carousel.Item>

    
    </Carousel>
  );
}

export default Carousels;