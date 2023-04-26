import './App.css';
import React, { Component } from 'react'; 
import xmlData from './blogdata.xml';
import XMLParser from 'react-xml-parser'; 
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

class Home extends React.Component {

constructor()
  {
	  super();
	  this.post=[];
	  this.flag=0;
	  
	  
	  var xmlFile = new XMLHttpRequest();
	  
	  
	  xmlFile.open("GET", xmlData, true);
	  
xmlFile.onreadystatechange = () => {
   if (xmlFile.readyState === 4) {
        if (xmlFile.status === 200 || xmlFile.status == 0) {
            var rs = xmlFile.responseText;
            
			this.xml = new XMLParser().parseFromString(rs); 
	this.post=this.xml.getElementsByTagName('post');
	
	
	 this.setState({});
	
			
        }
    }
}
   xmlFile.send();	  
	  
	

  }
  
  readmore(it) 
 {
   this.flag=1;	 
   var l=[];
  l[0]=it;
   this.post=l;
    this.setState({});  
 }  
  
 render() {
	 
	 if(this.flag==0)
	 {
	 
  return( 
	<div>
	   <Header/>
	  
	  <div className="row">
  <div className="column1">
    
	      
		  {
			  this.post.map(item => (
		    <span>
            <h3 className="blogheading">{item.children[2].value}</h3>
				<img src={item.children[3].children[0].value} width="700px" /><br/><br/>
				
				{item.children[3].children[1].value}<br/><br/>
			   
			Author : {item.children[1].value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			Date : {item.children[0].value}
			<br/>
			<input type="button" value="Read More" onClick={()=>this.readmore(item)} className="navbutton"/>
			<hr/>
			
			</span>
          ))
			  		  
		  }
		  
		  
	<br/>
	<br/>
  </div>
  <div className="column2">
   <Nav/>
	
  </div>
</div>
	
<Footer/>	
	
	</div>);
	 }
	 else{
		 

 return( 
	<div>
	  <Header/>
	  
	  <div className="row">
  <div className="column1">
    
	      
		  {
			  this.post.map(item => (
		    <span>
            <h3 className="blogheading">{item.children[2].value}</h3>
				<img src={item.children[3].children[0].value} width="700px"/><br/><br/>
				
				{item.children[3].children[1].value}<br/><br/>
			   
			   {item.children[4].value}<br/><br/>
			   
			Author : {item.children[1].value}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			Date : {item.children[0].value}
			<br/>
			<a href='./Blog' className="navbutton">Back</a>
			<hr/>
			
			</span>
          ))
			  		  
		  }
		  
		  
	<br/>
	<br/>
  </div>
  <div className="column2">
   <Nav/>
  </div>
</div>
	  
	<Footer/>
	</div>);
		 
		 
		 
	 }
  }
}

export default Home;
