import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from '../Card/Card';
import './News.css';

const News = () => {
  return (
    <div>
        <h3>News and Events</h3>
        <h7 class="grey-text">News and Events of The GST</h7>
        <Carousel interval={false} >
            <Carousel.Item>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Card cardtitle='INVENTUM PROJECT COMPETITION' cardinfo='Winners of INVENTUM PROJECT COMPETITION held at SIES College of Arts, Science  and Commerce , Nerul.
TEAM MAJESTICO,
Team Members:- 
Rushikesh Shinde
Ashit Sapaliga
Kush Shah
                            ' date='27-03-2019' branch='IT'/> 
                    <Card cardtitle='Err_404 Hackathon' cardinfo='Our students
Shantanu Ghar 
Sayali Patil 
Venkhatesh arunachalum
Suyash jaju
Won 3rd prize in err_404 hackathon conducted by MH saboo siddhik college of engg.' date='18-03-2019' branch='CE'/> 
                    <Card cardtitle='Innovations' cardinfo='The CSI Student Chapter of SIES Graduate School of Technology organised a national level project competition, INNOVATIONS, on 15th March, 2019. Innovations served as a platform for young minds to  take this window of opportunity and bring forward their innovative ideas in the form of projects. ' date='15-03-2019' branch='CE'/> 
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{display:'flex',flexDirection:'row'}}>
                    <Card cardtitle='TEAM TURBOCRAFTERS' cardinfo="The God Of War
'ARES'
has won the following achievements.
ESI  2019: 
AIR 19 ENDURANCE
1st in Mumbai (Endurance)
AIR 38 OVERALL

BAJA ROPAR 2019:
AIR 2 SALES
AIR 2 DESIGN
AIR 3 OVERALL STATICS
AIR 13 ENDURANCE
AIR 14 OVERALL
1st OVERALL (In Mumbai)
" date='09-03-2019' branch='ALL'/> 
                    <Card cardtitle='MOKSH DANCE CREW' cardinfo='"MOKSH" the official dance crew of SIESGST has won first price in NMIMS and LOKMANYA TILAK COLLEGE OF ENGINEERING.' date='28-02-2019' branch='ALL'/> 
                    <Card cardtitle='Industrial Visit' cardinfo='The department of Computer Engineering of SIES Graduate School of Technology, Nerul, Navi Mumbai has successfully organized and conducted Industrial visit to Verchaska Infotech Pvt. Ltd.,Vashi Navi Mumbai ' date='28-02-2019' branch='CE'/> 
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}



export default News;