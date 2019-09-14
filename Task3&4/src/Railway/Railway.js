import React from 'react';
import Button from 'react-bootstrap/Button';
import './Railway.css';

const Railway = props => (
    <div>
    <div class="row">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

        <div style={{right:'80px'}} >
          <h4 class="grey-text sub-head" align="center"><i class="fa fa-train"></i> Railway Concession | <span
              class="red-text">Your Applications</span></h4>
          <div class="center">
              <Button variant="danger">Apply</Button>
          </div>
          <br></br>
          <br></br>
          <div >
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
              <div class="card">
                <div class="card-image">
                  <img
                      src="https://portal.siesgst.ac.in/assets/redlocal.png"
                      class="responsive-img"/>
                </div>
                <div >
                      <p class="railway-content"><span class="grey-text
                          text-darken-2"><b>From:</b></span><span
                          class="grey-text text-darken-1">Mankhurd</span></p>
                      <p class="railway-content"><span class="grey-text
                            text-darken-2"><b>To:</b></span><span
                          class="grey-text text-darken-1"> Nerul</span></p>
                      <p class="railway-content"><span class="grey-text
                            text-darken-2"><b>Class:</b></span><span
                          class="grey-text text-darken-1"> I</span></p>
                      <p class="railway-content"><span class="grey-text
                          text-darken-2"><b>Period:</b></span><span
                          class="grey-text text-darken-1"> Quarterly</span></p>
                      <p class="railway-content"><span class="grey-text
                            text-darken-2"><i class="fa fa-clock"></i></span><span
                          class="grey-text text-darken-1"> Jul 17th 19</span>
                      </p>
                </div>

                <div class="card-action green white-text">
                      <Button size='lg' style={{width:'100%'}}variant="success"><i class="fa fa-check-circle"> Delivered</i></Button>  
                </div>

              </div>
              <div class="card">
                <div class="card-image">
                  <img
                      src="https://portal.siesgst.ac.in/assets/redlocal.png"
                      class="responsive-img"/>
                </div>
                <div >
                      <p class="railway-content"><span class="grey-text
                          text-darken-2"><b>From:</b></span><span
                          class="grey-text text-darken-1">Mankhurd</span></p>
                      <p class="railway-content"><span class="grey-text
                            text-darken-2"><b>To:</b></span><span
                          class="grey-text text-darken-1"> Nerul</span></p>
                      <p class="railway-content"><span class="grey-text
                            text-darken-2"><b>Class:</b></span><span
                          class="grey-text text-darken-1"> I</span></p>
                      <p class="railway-content"><span class="grey-text
                          text-darken-2"><b>Period:</b></span><span
                          class="grey-text text-darken-1"> Quarterly</span></p>
                      <p class="railway-content"><span class="grey-text
                            text-darken-2"><i class="fa fa-clock"></i></span><span
                          class="grey-text text-darken-1"> Apr 8th 19</span>
                      </p>
                </div>

                <div class="card-action green white-text">
                      <Button size='lg' style={{width:'100%'}}variant="success"><i class="fa fa-check-circle"> Delivered</i></Button>  
                </div>

              </div>


            </div>


          </div>
        </div>
  </div>
  </div>
  )
  export default Railway;