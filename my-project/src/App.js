import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Container from './Container';
import SearchItem from './SearchItem';
import './general.css';



const logo={
fontSize: '30px',
textAlign:'center',
}

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="topHeader">
            <div className="container" >
            <Header />
            </div>
            
        </div>
        
        <header>
        <p href={'#'} style={logo}>GAP</p>
        <SearchItem />
        <Container/>
        </header>
        <div>
          </div>
      </div>
      

      
    );
  }
}

export default App;
