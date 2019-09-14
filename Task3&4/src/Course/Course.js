import React from 'react';
import Card from '../Card/Card';
import '../Office/Office.css';
const Course = props => (
    
    <div style={{width:'75%',marginLeft:'15%'}}>
        <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <div >
       <h4 class="grey-text sub-head" align="center"><i class="fa fa-book"></i> Courses | <span style={{color:'#4caf50'}}>All Courses</span></h4>
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>

        <div class="col l6 m6 s12">
          <div class="input-field col s12">
            <select id="office_notices_branch">

              <option value="ALL">ALL</option>


              <option value="FE">First Year</option>


              <option value="CE">Computer Engineering</option>


              <option value="EXTC">Electronics and Telecommunication
Engineering</option>


              <option value="IT">Information Technology</option>


              <option value="ME">Mechanical Engineering</option>


              <option value="PPT">Printing and Packaging Technology</option>

            </select>
            <label>Branch</label>
          </div>
        </div>
      <div  class="col l6 m6 s12">
         <div class="input-field col s12">
            <select id="office_notices_year">
            <   option value="1">1</option>
						
						
                <option value="2">2</option>
            
            
                <option value="3">3</option>
            
            
                <option value="4">4</option>
            
            
                <option value="5" selected>5</option>
            
            
                <option value="6">6</option>
            
            
                <option value="7">7</option>
            
            
                <option value="8">8</option>

            </select>
            <label>Semester</label>
          </div>
        </div>
        </div>
        <div class='center'>
            <img src="https://portal.siesgst.ac.in/assets/empty/empty_green.svg" width="40%"/>
            <h4 class="grey-text">There are No Courses !</h4>
        </div>

  </div>    
  </div>


  )
  export default Course;