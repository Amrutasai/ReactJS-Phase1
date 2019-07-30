import React from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import Slider from './Slider/Slider';
import News from './News/News';
import Announcements from './Announcements/Announcements';
import Upcoming from './Upcoming/Upcoming';
import Recruiters from './Recruiters/Recruiters';
import Glimpse from './Glimpse/Glimpse';
import Footer from './Footer/Footer';

function App()
{
  return(
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}> 
        < Header /> 
        {<marquee>The college is NAAC Accredited B++ <a href="#"> Click here to for NAAC SSR</a></marquee>}
        <Slider/> 
        <br></br>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'8px'}}>
              <News /> 
              <div><Announcements/></div>
        </div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',margin:'8px'}}>
              <div><Upcoming/></div>
              <div><Recruiters/></div>
        </div>
        <hr></hr>
        <div><Glimpse/></div>
        <div style={{marginTop:'500px'}}><Footer/></div>

        
    </div>
  )
}
export default App;
