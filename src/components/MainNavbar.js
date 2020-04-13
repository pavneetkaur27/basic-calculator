import React, { Component } from 'react';
import CardComponent from './CardComponent';

class MainNavbar extends Component {
  constructor(props){
    super(props);
    this.state = {
     }
  }

 
  render(){
    return (
      <div id="mainnavbar">
        <CardComponent />
      </div>
    );
  }
}




export default (MainNavbar);