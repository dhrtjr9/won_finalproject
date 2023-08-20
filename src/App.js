import './App.css';
import { Navbar, Container, Nav, Card, Button} from 'react-bootstrap';

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

          </Nav>
          <form class="d-flex">
            <Nav.Link href="#regist">회원가입</Nav.Link>
            <li></li>
            <Nav.Link href="#login">로그인</Nav.Link>
          </form>
        </Container>
      </Navbar>
      <br />
      
      <div className='main-bg'></div>

      <br />
      {/* <Carousel>
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
    </Carousel> */}
    <div className='card-parent'>
      <Card style={{ width: '36rem' }}>
        <Card.Img variant="top" src="./images/logo512.png/100px180" />
        <Card.Body>
          <Card.Text>
          비회원도 이용할 수 있는 신용카드 추천 서비스
          나에게 적합한 카드는 무엇일까요?
          </Card.Text>
          <Button variant="primary">기본 추천 받기</Button>
        </Card.Body>
      </Card>
      <li></li>
      <Card style={{ width: '36rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
          나와 적합한 신용카드와 카드 분석 리포트까지
          지금 바로 이용해보세요
          </Card.Text>
          <Button variant="primary">회원 추천 받기</Button>
        </Card.Body>
      </Card>
      
      {/* <div className='card-main'></div>
      <li></li>
      <div className='card-main1'></div> */}
    </div>

    <br></br>

    <div className='card-product'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <li></li>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <li></li>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <li></li>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

          </div>
        </div>  
      </div>
  //   </div>
  // </div>
  );
}



export default App;
