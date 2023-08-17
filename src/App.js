import './App.css';
import { Navbar, Container, Nav, Carousel } from 'react-bootstrap';

function App() {
  return (
    <div className='header_wrap'>
    <div className="App">
      <div className='nav_logo'>
      <Navbar bg="primary" data-bs-theme="dark" className='won-nav'>
        <Container>
          <Navbar.Brand href="#home">WON</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#credit">신용카드</Nav.Link>
            <Nav.Link href="#credit">대출</Nav.Link>
            <Nav.Link href="#credit">보험</Nav.Link>
            <Nav.Link href="#credit">예적금</Nav.Link>
            <Nav.Link href="#regist">회원가입</Nav.Link>
            <Nav.Link href="#login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/24/37/K4wNkq.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="http://tdinteriorsinc.com/wp-content/uploads/2013/03/landscape-7-800x400.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/24/37/K4wNkq.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* <div className="container">
  <div className="row">
    <div className="col-md-4"> 
    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"></img>
    <h4>상품명</h4>
    <p>상품설명&가격</p></div>
    <div className="col-md-4"> 
    <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"></img>
    <h4>상품명</h4>
    <p>상품설명&가격</p></div>
    <div className="col-md-4"> 
    <img src="public\logo512.png" width="100%"></img>
    <h4>상품명</h4>
    <p>상품설명&가격</p></div> */}

          </div>
        </div>  
      </div>
    </div>
  </div>
  );
}



export default App;
