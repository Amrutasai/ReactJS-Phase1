import React,{Component} from 'react';
import './Home.css';
import SidePanel from '../SidePanel/SidePanel';
import Card from '../Card/Card';
import Header from '../Header/Header';
class Home extends Component  {

constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.closeMenu = this.closeMenu.bind(this);
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showMenu: true,
    }, () => {
      // document.addEventListener('click', this.closeMenu);
      console.log('OnButtonClick')
    });
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
      console.log('closeMenu')

    });
  }

  render() {
    return (
      <div style={{display:'flex',flexDirection:'column'}}>
          <i class="fa fa-home fa-2x " style={{color: '#9e9e9e',marginLeft:'45%',padding:'30px'}} > Home</i>
          <div style={{marginLeft:'28%'}}>
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
    );
  }
}
export default  Home;

