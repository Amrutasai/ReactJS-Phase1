import React,{Component} from 'react';
import './SidePanel.css';
import { NavLink } from 'react-router-dom'; 

import Profile from '../Profile/Profile';

class SidePanel extends Component{

    constructor(props) {
        super(props);
        this.state = {
        //   showMenu: false,
          showProfile:false,
        };
        this.closeMenu = this.closeMenu.bind(this);
        this.Profclick = this.Profclick.bind(this);
      }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
          console.log("Profclick")

        });
    }
    Profclick(){
        this.setState({ showProfile: true}, () => {
            document.removeEventListener('click', this.closeMenu);
            console.log("Profile",this.state.showProfile)
          });
        
    }
    render(){
    return(
      
        <div class='sidepanel'>
        <div class='bio'>
            <br></br>
            <img style={{marginLeft:'15px'}}src="https://lh5.googleusercontent.com/-_LFYAnNk-Hw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcINoHn2pVrq_duL3JlvtXzBJn_qg/photo.jpg" alt="profile image" class="circle " width="60"/>
            <br></br><br></br>
            <div class='text'>
            AVN AMRUTA SAI <br></br>  
            amruta.sai17@siesgst.ac.in </div>      
        </div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        
        <NavLink style={{textDecoration:'none'}}to="/"><i style={{ paddingRight:'50px'}} class='fa fa-home fa-2x'></i>Home</NavLink>        
        <NavLink style={{textDecoration:'none'}} to="/profile"><i style={{ paddingRight:'55px'}}class="fa fa-user fa-2x" ></i>Profile</NavLink>    
        <NavLink style={{textDecoration:'none'}}to="/course"><i style={{ paddingRight:'50px'}}class="fa fa-book fa-2x"></i>Courses   </NavLink>    
        <NavLink style={{textDecoration:'none'}}to="/examcell"><i style={{ paddingRight:'40px'}}class="fa fa-graduation-cap fa-2x"></i>Exam Cell  </NavLink>     
        <NavLink style={{textDecoration:'none'}}to="/office"><i style={{ paddingRight:'53px'}}class="fa fa-building-o fa-2x"></i>Office        </NavLink>
        <NavLink style={{textDecoration:'none'}}to="/railway"><i style={{ paddingRight:'53px'}}class="fa fa-train fa-2x"></i>Railway Concession  </NavLink>    
        {/* <NavLink style={{textDecoration:'none'}}to="/poll"><i class="fa fa-bar-chart fa-2x"></i>Poll     </NavLink> */}
        <NavLink style={{textDecoration:'none'}}to="/logout"><i style={{ paddingRight:'50px'}}class="fa fa-sign-out fa-2x"></i>Logout</NavLink>
        </div>
    );}
}
export default SidePanel;