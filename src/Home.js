import './App.css';
import React, { Component } from 'react';  
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

class Home extends React.Component {
  	 
	 
	 
constructor()
  {
	  super();
	  this.news=[];
	  
	  
	
      
	   
	  
	  
  }
  
  componentDidMount () {
	  this.fetchData();
	   this.interval = setInterval(() => {
    this.fetchData()
  }, 60000)
  }
  
  componentWillUnmount () {
  clearInterval(this.interval);
}
  
  fetchData = () => {
	
 var req = new XMLHttpRequest();
	  
	  
	  
    req.open("GET", "https://newsapi.org/v2/everything?q=latest%20news&from=2023-04-22&sortBy=publishedAt&apiKey=", true); /**
     * 3rd Party API Key is removed 
     */


req.onreadystatechange = () => {
   if (req.readyState === 4) {
        if (req.status === 200 || req.status == 0) {
            var rs = req.responseText;
            this.news=JSON.parse(rs).articles;
	     console.log(this.news);
	
	 this.setState({});
	     
			
        }
    }
}
   req.send();	  
	  
   	
  
  }
	 
 render() {
  return( 
	<div>
	 <Header/>
	  
	  <div className="row">
  <div className="column1">
    <h2>News</h2>
    
	 {
			  this.news.map(item => (
			   <span>
			   {item.publishedAt.split('T')[0]}<br/> 
			   {item.title}<br/>
			   {item.content}
			   
			   <hr/>
			   </span>
			   ))
			  		  
		  }
	
	
  </div>
  <div className="column2">
   
	 <Nav/>
  </div>
</div>
	  
	<Footer/>
	</div>);
  }
}

export default Home;
