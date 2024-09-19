import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/banner-1.jpg';
import img2 from '../../images/banner-2.jpg';
import img3 from '../../images/banner-3.jpg';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;