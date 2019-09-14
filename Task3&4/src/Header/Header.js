import React,{Component} from 'react';
import './Header.css';
import SidePanel from '../SidePanel/SidePanel';

class Header extends Component  {

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
          document.addEventListener('click', this.closeMenu);
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
              <div class='head'>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
                <i style={{paddingLeft:'20px'}} class="fa fa-bars fa-lg" onClick={this._onButtonClick}></i>
                <span class = 'texthead'>SIESGST PORTAL</span>
                {this.state.showMenu ? <div ><SidePanel/></div> : null }
              </div>
        );}
}
export default Header;