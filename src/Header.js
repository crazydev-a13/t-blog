import React from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './images/en.jpg'
import ScaleText from "react-scale-text";


class Header extends React.Component{
    render(){
        return(
        //    <div >
              
        //       {/* <p class="text-left scale " style={{paddingLeft:'3%'}}><h1>Let people</h1><br />
        //       <h3>know what</h3><br /> 
        //       <h1>do you think...</h1><br /></p> */}
               
        //        </div> 
        
        <img src={Logo} className="img-fluid"/>
               
        );
    }
}
export default Header;