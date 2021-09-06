import { useState, useEffect } from 'react';
import { Container, Col, Row, InputGroup, FormControl } from 'react-bootstrap';
import { useDebounce } from 'use-debounce';



function Chat() {

  const [text, setText] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [value] = useDebounce(text, 1000);

  useEffect(()=>{
    setInput1('');
    setInput2('');
  },[value])

    return(
      <div className="">
        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <InputGroup>                
                <FormControl as="textarea" rows="5" aria-label="Person A" value={value} />
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
                    setText(value+"\n"+e.target.value);
                    setInput1(e.target.value);
                }} 
                  value={input1}
                />
              </InputGroup>
            </Col>
            <Col sm={6}>
              <InputGroup>
                <InputGroup.Text>Person B</InputGroup.Text>
                <FormControl as="textarea" aria-label="Person B" 
                  onChange={(e) => {
                    setText(value+"\n"+e.target.value);
                    setInput2(e.target.value);
                }} 
                  value={input2}
                />
              </InputGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  export default Chat; 