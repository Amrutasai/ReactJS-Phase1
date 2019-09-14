import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'; 
import './Register.css';

const Register=()=>{
    return(
        <div id="login-bg-color">
        <div class="row">
          <div class="col s10 offset-s1 m12 l6 offset-l3">
            <div class="regcard">
              <h4 class="center grey-text text-darken-3">Welcome to SIESGST Portal</h4>
              <p class="grey-text text-darken-2 center login-content">Register to SIES GST Portal with your GST Gmail
                Account to get college updates, railway concession, halltickets, results and other features.</p>
              <form action="/profile"  enctype="multipart/form-data">
                <div class="input-field">
                  <input id="name" type="text" class="validate" name="name" required/>
                  <label for="name">Name</label>
                </div>
                <div class="input-field">
                  <input id="prn" type="text" class="validate" name="prn" placeholder="111A1000"/>
                  <label for="prn">PRN</label>
                </div>
                <div class="input-field">
                  <input id="email" type="email" class="validate" name="email" required/>
                  <label for="email">Email</label>
                </div>
                <div class="input-field">
                  <select name="gender" required>
                    <option value="" disabled selected>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div class="input-field">
                  <select name="branch" required>
                    <option value="" disabled selected>Branch</option>
                    <option value="CE">Computer Science</option>
                    <option value="IT">Information technology</option>
                    <option value="EXTC">Electronics and Telecommunication </option>
                    <option value="ME">Mechanical Engineering</option>
                    <option value="PPT">Printing and Packaging Technology</option>
                  </select>
                </div>
                <div class="input-field">
                  <select name="semester" required>
                    <option value="" disabled selected>Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>
                <div class="input-field">
                  <select name="year" required>
                    <option value="" disabled selected>Year</option>
                    <option value="BE">BE</option>
                    <option value="TE">TE</option>
                    <option value="SE">SE</option>
                    <option value="FE">FE</option>
                  </select>
                </div>
                <div class="input-field">
                  <select name="division" required>
                    <option value="" disabled selected>Division</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                    <option value="H">H</option>
                  </select>
                </div>
                <div class="input-field">
                  <input id="batch" type="text" class="validate" name="batch"/>
                  <label for="batch">Batch</label>
                </div>
                <div class="input-field">
                  <input placeholder="Date of Birth" type="text" class="datepicker" name="dateOfBirth" required/>
                </div>
                <div class="input-field">
                  <input id="contact" type="number" class="validate" name="contact" required/>
                  <label for="contact">Contact Number</label>
                </div>
                <div class="input-field">
                  <textarea id="address" name="address" class="materialize-textarea" required></textarea>
                  <label for="address">Address</label>
                </div>
                <div class="input-field">
                  <textarea id="about" name="about" class="materialize-textarea"></textarea>
                  <label for="about">About - A short description about yourself</label>
                </div>
                <div class="input-field">
                  <input id="link" type="text" class="validate" name="links"/>
                  <label for="links">Links eg : GitHub</label>
                </div>
                <div class="input-field">
                  <input id="interests" type="text" class="validate" name="interests"/>
                  <label for="interests">Interests</label>
                </div>
                <div align="center">
                  {/* <NavLink style={{textDecoration:'none',backgroundColor:'white'}}to="/"> */}
                    <Button type="submit" variant="primary">Register</Button>
                    {/* </NavLink> */}
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

}
export default Register;