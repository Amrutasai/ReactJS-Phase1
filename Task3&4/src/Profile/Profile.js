import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';
import './Profile.css';

class Profile extends Component{
    constructor(props) {
        super(props);
        // this.state = {
        // //   showMenu: false,
        //   showProfile:false,
        // };
        // // this.closeMenu = this.closeMenu.bind(this);
        // this.Profclick = this.Profclick.bind(this);
    }
    render(){
        return(
        <div style={{marginTop:'15px',display:'flex',flexDirection:'column',boxShadow:' 0px 3px 15px rgba(0,0,0,0.14)',width:'60%',marginLeft:'20%'}}>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            
            <div class='Profhead'>
                <img style={{marginLeft:'50%',marginTop:'20%'}}src="https://lh5.googleusercontent.com/-_LFYAnNk-Hw/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rcINoHn2pVrq_duL3JlvtXzBJn_qg/photo.jpg" alt="profile image" class="circle " width="70"/>
            </div>
            
            <div class='bodydesc'>
            
                <div style={{marginRight:'35%',marginLeft:'44px'}}>
                    AVN AMRUTA SAI
                </div>
            
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{marginRight:'70px'}} >TE</div>
                    <div style={{marginRight:'70px'}}>CE</div>
                    <div style={{marginRight:'70px'}}>C</div>
                </div>
            </div>
            
            <div class='subdesc'>
            
                <div style={{marginRight:'37%',marginLeft:'44px'}}>
                amruta.sai17@siesgst.ac.in<br></br>
                117A1006<br></br>
                <Button variant="primary">UPDATE PROFILE </Button>
                </div>
            
                <div style={{display:'flex',flexDirection:'row'}}>
                    <div style={{marginRight:'70px'}} >Year</div>
                    <div style={{marginRight:'50px'}}>Branch</div>
                    <div style={{marginRight:'30px'}}>Division</div>
                </div>

            </div>
            
            <div class='ProfCards'>
            
                <div style={{display:'flex',flexDirection:'row'}}>
                    <i style={{margin:'15px',paddingLeft:'20px',paddingTop:'10px'}}class="fa fa-info-circle fa-3x" ></i><div style={{fontSize: '16px',marginTop:'10px'}}>About<pre></pre></div> 
                    <p>
                    
                    </p>
                </div>
            </div>

            <div class='ProfCards'>
            
                <div style={{display:'flex',flexDirection:'row'}}>
                    <i style={{margin:'15px',paddingLeft:'20px',paddingTop:'10px'}}class="fa fa-volume-control-phone fa-3x" ></i><div style={{fontSize: '16px',marginTop:'10px'}}>Contact<pre>
                    1234567890</pre></div> 
                </div>
            </div>

            <div class='ProfCards'>
            
                <div style={{display:'flex',flexDirection:'row'}}>
                    <i style={{margin:'15px',paddingLeft:'20px',paddingTop:'10px'}}class="fa fa-home fa-3x" ></i><div style={{fontSize: '16px',marginTop:'10px'}}>Address<pre>
                    1-X, ABC <br></br>
                    XYZ<br></br>
                    400-000</pre></div> 
                </div>
            </div>

            <div class='ProfCards'>
            
                <div style={{display:'flex',flexDirection:'row'}}>
                    <i style={{margin:'15px',paddingLeft:'20px',paddingTop:'10px'}}class="fa fa-birthday-cake fa-3x" ></i><div style={{fontSize: '16px',marginTop:'10px'}}>DOB<pre>
                    Thu Mar 30 2000 05:30:00 GMT+0530 (India Standard Time)</pre></div> 
                </div>
            </div>

            <div class='ProfCards'>
        
                <div style={{display:'flex',flexDirection:'row'}}>
                    <i style={{margin:'15px',paddingLeft:'20px',paddingTop:'10px'}}class="fa fa-link fa-3x" ></i><div style={{fontSize: '16px',marginTop:'10px'}}>Links<pre></pre></div> 
                    <p>
                    
                    </p>
                </div>
            </div>

            <div class='ProfCards'>

                <div style={{display:'flex',flexDirection:'row'}}>
                    <i style={{margin:'15px',paddingLeft:'20px',paddingTop:'10px'}}class="fa fa-star fa-3x" ></i><div style={{fontSize: '16px',marginTop:'10px'}}>Interests<pre></pre></div> 
                    <p>
                    
                    </p>
                </div>
            </div>

      </div>
        );
    }
}
export default Profile;