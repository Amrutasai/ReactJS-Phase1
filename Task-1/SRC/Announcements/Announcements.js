import React from 'react';
import './Announcements.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';



const Announcements=()=>{
  return(
    <div>
    <h3>Announcements</h3>
    <h7 class="grey-text">Latest news from The GST</h7>
    <Tabs defaultActiveKey="Admission"  >
        <Tab eventKey="Admission" title="ADMISSION"  >
            <div>
                <ul class='collection'>
                <li class="collection-item avatar">
                                        <p></p>
                                        <span class="title">INSTITUTE LEVEL CONSOLIDATED MERIT LIST 2019-20</span>
                                        <p>
                                        </p><div class="datebranch">13-07-2019</div>
                                        <div class="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>
                </li>
                <li class="collection-item avatar">
                                        <span class="title">Fee &amp; Documents details for CAP Students - First Year Engineering</span>
                                        <p>
                                        </p><div class="datebranch">11-07-2019</div>
                                        <div class="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>

                </li>
                <li class="collection-item avatar">
                                        <span class="title">Guidance Session for First Year Engineering Admissions</span>
                                        <p>
                                        </p><div class="datebranch">12-07-2019</div>
                                        <div class="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>

                </li>
                
                </ul>
            </div>
        </Tab>
        <Tab eventKey="General" title="GENERAL">
            <div>
            <div>
                <ul class='collection'>
                <li class="collection-item avatar">
                                        <p></p>
                                        <span class="title">Vacancy position after Counseling Round -I</span>
                                        <p>
                                        </p><div class="datebranch">19-07-2019</div>
                                        <div class="datebranch">FE</div>
                                        <p></p>
                                        <hr></hr>
                </li>
                <li class="collection-item avatar">
                                        <span class="title">Merit List after the Counseling Round - I</span>
                                        <p>
                                        </p><div class="datebranch">19-07-2019</div>
                                        <div class="datebranch">FE</div>
                                        <hr></hr>

                </li>
                <li class="collection-item avatar">
                                            <span class="title">First year Engineering Admissions-Institute Level Counselling Round I -Schedule 2019-20</span>
                                            <p>
                                            </p><div class="datebranch">15-07-2019</div>
                                            <div class="datebranch">FE</div>
                                            <p></p>
                                            <hr></hr>

                 </li>
                </ul>
            </div>
            </div>
        </Tab>
    </Tabs>
    </div>
    );}

export default Announcements
