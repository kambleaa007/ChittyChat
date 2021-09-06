import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container, Navbar, Nav, Col, Row } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Chat from './components/Chat';

function App() {
  return (
    <HashRouter>
    <Container>
      <NavBar />
      <Switch>
        <Route path="/" exact component= { (props) => ( <Home  /> )} />
        <Route path="/chat" component={(props) => ( <Chat /> )} />  
        <Route path="/login" component={(props) => ( <div>Login</div> )} /> 
        <Route path="/aboutus" component={(props) => ( <div>About Us</div> )} />   
        <Route path="/contactus" component={(props) => ( <div>Contact us</div> )} />        
      </Switch>
    </Container>
    </HashRouter>

  );
}

export default App;
