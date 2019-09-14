import React from 'react';
import './Office.css';
import Card from '../Card/Card';

const Office = props => (
    
    <div style={{width:'75%',marginLeft:'15%'}}>
        <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
       <div >
       <h4 class="grey-text sub-head" align="center"><i class="fa fa-building"></i> Office | <span class="blue-text">General Notices</span></h4>
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
            cardtitle='GSTians Developers Program (GDP) - Interviews' 
            cardinfo="The scientist discovers a new type of material or energy and the engineer discovers a new use for it.
             Science can amuse and fascinate us all, but it is engineering that changes the world." 
             date=' September 4th 2019, 10:49:41 pm' 
             branch='Office'/>
      <Card 
            cardtitle='Cognition 2019 - Event Head Forms' 
            cardinfo="Here's what all of us have been waiting for!🔥
            Cognition 2019 is on for 28th and 29th of September 🎉

            And your chance for being an event head is right here🙌🏻" 
            date='  September 8th 2019, 4:29:09 pm' 
            branch='Office'/>
      <Card 
            cardtitle='Technical Team - Coordinators Selection' 
            cardinfo="Hello Gstians,
            Ever wanted to work on drones and robots? Build App or Website that thousands of students use? Or create immersive VR games?
            Well now is the chance to make your dream come true!" 
            date='  April 29th 2019, 8:21:41 pm' 
            branch='Office'/>      
      </div> 

      
    </div>
  </div>


  )
  export default Office;