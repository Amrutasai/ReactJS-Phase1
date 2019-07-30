import React from 'react';
import './Footer.css'

const Footer=()=>{
    return(
    <footer class="page-footer grey darken-3">
    <div class="container">
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}} >
            <div >
                <h5 class="white-text">The Graduate School of Technology</h5>
                <span class="white-text">Affiliated to the University of Mumbai <span class="grey-text">|</span> AICTE, NBA, NAAC Accredited</span>
                <p class="greytext">
                    SIES GST is committed to high standards of Engineering Education, whilst complying with the
                    requirements laid down by the statutory and regulatory bodies. The aim is to continually enhance
                    learning opportunities by providing multiple study options through a perfect blend of Academic
                    Excellence, Teaching-learning process, Teacher-student mentoring based on our quality management
                    system that complies with ISO 9001:2008 and enables learners to thrive in a rapidly evolving
                    environment. <br></br>
                    Ragging is a punishable offence as per the provision of the "Provision of Ragging Act 1997" and the
                    rules made there under. SIES Graduate School of Technology is a Ragging free campus.
                </p>
            </div>
            <div >
                <iframe class="gmaps" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJzYUsXtvD5zsRboFzfS3FJu8&amp;key=AIzaSyBK0QV5vakzq9aC7JxYLtLTBf_exSG9LZU" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
    <div >
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignContent:'center', backgroundColor: '#696969',padding:'8px'}}>
            
                <span>© 2017 SIES Graduate School Of Technology, Nerul · All Rights Reserved</span>
           
                <span class="right">&nbsp;&nbsp;
                    <a> HOME </a> ·
                    <a > PRIVACY </a> ·
                    <a> DEVELOPERS </a> ·
                    <a> CONTACT US </a> ·
                    <a > MANDATORY DISCLOSURE</a>
              </span>
            
        </div>
    </div>
</footer>
    );
}

export default Footer;