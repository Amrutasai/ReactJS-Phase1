import React from 'react';
import './Card.css';

const Card=(props)=>{
    let {cardtitle,cardinfo,date,branch}=props;

    return(
        <div class='card_dimension'>
          <img style={{    width: '255px' ,height: '170px'}}src='http://www.siesgst.edu.in/assets/background1.jpg'/>
          <p class='cardtitle'>{cardtitle}</p>  
          <span class='cardinfo'>{cardinfo}</span>
          <div style={{display:'flex',flexdirection:'row',justifyContent:'space-around'}}>
              <div class='datebranch' >{date}</div>
              <div class='datebranch' >{branch}</div> 
          </div>  
        </div>
        
    );

}

export default Card;