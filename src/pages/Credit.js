// import { useState } from 'react';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
import { Navbar, Container, Nav, Card, Button, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';


function Credit() {
    
    return (
      <div className="credit">
        <br></br>
        <>
    <h5>카드사</h5>
      <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
        <ToggleButton id="tbg-check-1" value={1}>
          우리카드
        </ToggleButton>
        <ToggleButton id="tbg-check-2" value={2}>
          국민카드
        </ToggleButton>
        <ToggleButton id="tbg-check-3" value={3}>
          신한카드
        </ToggleButton>
        <ToggleButton id="tbg-check-4" value={4}>
          현대카드
        </ToggleButton>
        <ToggleButton id="tbg-check-5" value={5}>
          삼성카드
        </ToggleButton>
        <ToggleButton id="tbg-check-6" value={6}>
          삼성카드
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <h5>혜택</h5>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          Radio 1 
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          Radio 2
        </ToggleButton>
        <ToggleButton id="tbg-radio-3" value={3}>
          Radio 3
        </ToggleButton>
      </ToggleButtonGroup>
    </>
        <div className='header_wrap1'>
      <div className='card-product1'>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./images/taptap_samsung.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>카드사</Card.Title>
          <Card.Text>
            주요혜택
          </Card.Text>
          <Button variant="primary">상세 보기</Button>
        </Card.Body>
      </Card>
      <li></li>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./images/taptap_samsung.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>카드사</Card.Title>
          <Card.Text>
            주요혜택
          </Card.Text>
          <Button variant="primary">상세 보기</Button>
        </Card.Body>
      </Card>
      <li></li>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./images/taptap_samsung.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>카드사</Card.Title>
          <Card.Text>
            주요혜택
          </Card.Text>
          <Button variant="primary">상세 보기</Button>
        </Card.Body>
      </Card>
      <li></li>
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="./images/taptap_samsung.png" width="100" height="180" />
        <Card.Body>
          <Card.Title>카드사</Card.Title>
          <Card.Text>
            주요혜택
          </Card.Text>
          <Button variant="primary">상세 보기</Button>
        </Card.Body>
      </Card>
              
      </div>
    </div>
  </div>
    )
  }

export default Credit;