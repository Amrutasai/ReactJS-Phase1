import React from 'react';
import './Card.css';



const Card=(props)=>{
  let {cardtitle,cardinfo,date,branch}=props;
  return(
    <div class='bodycard'>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div class='uppercard'>
        <p class='darkgrey'>{cardtitle}</p>
        <div class='blue'>
        {branch}
        </div>
        <p class='desc'>{cardinfo } </p>
        <div>
        <i class="fa fa-clock-o" style={{color:'#9e9e9e'}}> {date}</i>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div class='bluetag'>ALL</div><div class='redtag'>ALL</div>
        </div>
        </div>
        <hr></hr>
        <div class='bottom'>
            <i class="fa fa-search" style={{color:'#757575'}}>VIEW</i>
            <i class="fa fa-download" style={{color:'#9e9e9e'}}> DOWNLOAD</i>

        </div>
    </div>
    );}

export default Card
