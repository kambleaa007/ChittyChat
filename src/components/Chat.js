import { useState } from 'react';
import { Container, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { useDebounce } from 'use-debounce';



function Chat() {

  const [text, setText] = useState('');
  const [value] = useDebounce(text, 1000);



    return(
      <div className="">
        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <InputGroup>                
                <FormControl as="textarea" aria-label="Person A" value={value} />
              </InputGroup>
            </Col>
            <Col sm={3}></Col>
          </Row>
          <Row><br/></Row>
          <Row>
            <Col sm={6}>
              <InputGroup>
                <InputGroup.Text>Person A</InputGroup.Text>
                <FormControl as="textarea" aria-label="Person A" 
                  onChange={(e) => {
                    setText(e.target.value);
                }} />
              </InputGroup>
            </Col>
            <Col sm={6}>
              <InputGroup>
                <InputGroup.Text>Person B</InputGroup.Text>
                <FormControl as="textarea" aria-label="Person B" />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  export default Chat; 