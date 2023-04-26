import './App.css';
import React, { Component } from 'react';
class Nav extends React.Component {
  	 
 render() {
  return( 
	<div>
    <a href='/' className="navbutton">Home</a>
	<br/>
	<a href='/Blog' className="navbutton">Blog</a>
	
	</div>);
  }
}

export default Nav;
