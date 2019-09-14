import React from 'react';
import './Login.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'; 



const Login=()=>{
    return(   
        <div id="login-bg">
          <div class="row">
            <div class="col s10 offset-s1 m8 offset-m2 l4 offset-l4">
              <div class="logcard" >
                <h5 class="center grey-text text-darken-3">Welcome to SIESGST Portal</h5>
                <p class="grey-text text-darken-2 center login-content">Sign Up to SIES GST Portal with your GST Gmail Account
                  to get college updates, railway concession, halltickets, results and other features.</p><br></br>
                <div style={{height:'200px',width:'350px',marginLeft:'70px',marginTop:'0px'}}>
                    <Carousel  style={{height:'200px',overflow:'hidden',width:'350px',marginLeft:'-20px'}} data-interval='100' data-wrap='false'  >
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="https://portal.siesgst.ac.in/assets/attendance/attend_red.svg"
                              alt="First slide"
                            />
                            
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="https://portal.siesgst.ac.in/assets/exam%20cell/exam_blue.svg"
                              alt="Third slide"
                            />

                            
                          </Carousel.Item>
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src="https://portal.siesgst.ac.in/assets/redlocal.png"
                              alt="Third slide"
                            />

                            
                          </Carousel.Item>
                    </Carousel>
                </div>
                <br></br>
                <br></br>

                <div style={{marginLeft:'50px',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <NavLink style={{textDecoration:'none',backgroundColor:'white'}}to="/signin"><Button variant="primary">Login</Button></NavLink>
                <NavLink style={{textDecoration:'none',backgroundColor:'white'}}to="/register"> <Button variant="primary">Register</Button></NavLink>
                </div>


              
              </div>
              <div >
                <br></br>
                <h5 style={{marginLeft:'80px'}}class="center white-text text-darken-3"> One College. One Platform &#x2764;</h5>

              </div>
            </div>
          </div>
        </div>

     
    );
}
export default Login;