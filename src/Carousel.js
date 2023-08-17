import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import { Carousel } from 'react-bootstrap';

function Carousel() {
  return (
    <Carousel>
    <Carousel.Item>
        <div className='slidercontents'>
            <div className='wrapText'>
                <h1>Organic fresh fruits for your health</h1>
                <div className="d-none d-md-block">
                    <p>Interdum et malesuada fames ac ante ipsum primis in 
                    faucibus. Mauris eleifend sagittis mollis. 
                    Nulla finibus arcu eu tortor gravida aliquet</p>
                </div>
                <button>SHOP NOW</button>
            </div>
        </div>
    </Carousel.Item>
    <Carousel.Item>
        <div className='slidercontents2'>
            <div className='wrapText'>
                <h1>Organic fresh fruits for your health</h1>
                <div className="d-none d-md-block">
                    <p>Interdum et malesuada fames ac ante ipsum primis in 
                    faucibus. Mauris eleifend sagittis mollis. 
                    Nulla finibus arcu eu tortor gravida aliquet</p>
                </div>
                <button>SHOP NOW</button>
            </div>
        </div>
    </Carousel.Item>
</Carousel>
  );
}

export default Carousel;