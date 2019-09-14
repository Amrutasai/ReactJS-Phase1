import React from 'react';
import Card from '../Card/Card';
const Examcell = props => {
return(
    <div style={{width:'75%',marginLeft:'15%'}}>
        <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <div >
       <h4 class="grey-text sub-head" align="center"><i class="fa fa-graduation-cap"></i> Examcell | <span style={{color:'orange'}}>Notices</span></h4>
       <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
         <div  class="col l6 m6 s12">
         <div class="input-field col s12">
            <select id="office_notices_year">
              .
              <option value="ALL">ALL</option>


              <option value="FE">FE</option>


              <option value="SE">SE</option>


              <option value="TE" selected>TE</option>


              <option value="BE">BE</option>

            </select>
            <label>Year</label>
          </div>
        </div>
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
      </div>

      <div style={{display:'flex',flexDirection:'column',marginLeft:'20%'}}>
      <Card
      cardtitle='Hall ticket Stamping' 
      cardinfo="Dear Students, All the students of SE and TE are hereby informed that they can take the printout of their concern examination hall tickets from the college website and FE and BE from university portal and get the same stamped from the college, please find the attached branch wise venue and timing details for hall ticket stamping.      " 
       date='  November 6th 2018, 1:29:57 pm' 
       branch='TE'/>
      </div> 

      
    </div>
  </div>

);}
export default Examcell;