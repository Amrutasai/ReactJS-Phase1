import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Login from '../Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';



const Signin=()=>{
    return(
        <Form style={{marginTop:'5%',padding:'25px',boxShadow:'0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12), 0 8px 10px -7px rgba(0,0,0,.2)',height:'25%',width:'50%',marginLeft:'25%'}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label style={{padding: '12px 12px 12px 0',display: 'inline-block'}}>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
    <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    );
}
export default Signin;