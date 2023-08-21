import { useState } from 'react';
import './App.css';
import { Navbar, Container, Nav, Card, Button, NavLink} from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
// import 작명 from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import imgFile from "./WON-logo-white.png"
import Credit from './pages/Credit';

function App() {

  // Data.js 파일에서 가져 오기 위한 함수
  let [card] = useState()
  let navigate = useNavigate(); //훅

  return (
    <div className="App">

    <div className='header_wrap'>
      <div className='nav_logo'>
      <Navbar bg="primary" data-bs-theme="dark" className='won-nav'>
        <Container>
          <Navbar.Brand href="#home" className='won-font'>WON</Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>HOME</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/credit') }}>신용카드</Nav.Link>
            {/* <Nav.Link href="#credit">신용카드</Nav.Link> */}
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



      <Routes>
        <Route path='/' element={
        <>
        <br />
      
        <div className='main-bg'></div>
  
        <br />
       
      <div className='card-parent'>
        <Card style={{ width: '36rem' }}>
        <Card.Img variant="top" src="./images/recom_image2.jpg" height="270"/>
          <Card.Body>
            <Card.Text>
            비회원도 이용할 수 있는 신용카드 추천 서비스 <br></br>
            나에게 적합한 카드는 무엇일까요?
            </Card.Text>
            {/* <Button variant="primary">기본 추천 받기</Button> */}
            <Button href="/credit">기본 추천 받기</Button>
            
          </Card.Body>
        </Card>
        <li></li>
        <Card style={{ width: '36rem' }}>
          <Card.Img variant="top" src="./images/recom_image1.jpg" height="270"/>
          <Card.Body>
            <Card.Text>
            나와 적합한 신용카드와 카드 분석 리포트까지 <br></br>
            지금 바로 이용해보세요
            </Card.Text>
            <Button href="/credit">회원 추천 받기</Button>
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
      </>
        } />
        <Route path='/credit' element={<Credit/>}/>
        {/* // 카드 상품 내 상세페이지 */}
        <Route path='/credit_modal' element={<credit/>} />
      </Routes>

      

          </div>
        </div>  
      </div>
  //</div>
  // </div>
  );
}



export default App;
