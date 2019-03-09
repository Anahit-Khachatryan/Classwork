import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';


const header = {
  backgroundColor: "black",
  overflow: "hidden"
}
const TopHeader = {
  padding: "7px"
}
const cont = {
  padding: ' 0 15px'
}
const topCont = {
  padding: '0 15px'
}
const row = {
  margin: "0 -15px"
}
const col30 = {
  padding: '0 15px',
  float: 'left'
}
const col70 = {
  float: 'left',
  padding: '0 15px'
}
const col25 = {
  float: "left",
  padding: "0 15px"
}

const STRINGS = [{
  key: 1,
  value: "First Category",
}, {
  key: 2,
  value: "Second Category",
}, {
  key: 3,
  value: "Third Category",
}, {
  key: 4,
  value: "Forth Category",
}, {
  key: 5,
  value: "Fifth Category",
}, {
  key: 6,
  value: "Sixth Category",
},];

const menu = [{
  key: 1,
  value: "Home",
}, {
  key: 2,
  value: "Cataloge",
}, {
  key: 3,
  value: "Company",
}, {
  key: 4,
  value: "Contact",
},
];
const products = [
  { variant : '', title :'Das', context : 'Kas' },
  { variant: '', title :'Alen', context : 'Balen' },

];


class App extends Component {
  render() {
    return (
      <div className="App">
       
        <main>
                    <div style={TopHeader}>
                        <div className="container" style={topCont}>
                            <input type={"text"} value={"Search from"} />
                            <input type={"button"} value="Search" />
                        </div>
                    </div>
                    <div style={header}>
                        <div className="container" style={cont}>
                            <Header menu={menu} />
                        </div>
                    </div>

                    <div className="container ">
                        <div style={row}>
                            <div style={col30} >
                                <div className="leftSideBar">
                                    <h2> Select SideBar</h2>
                                    <SideBar items={STRINGS} />
                                </div>

                            </div>
                            <div style={col70}>
                                <div style={row}>
                                    <div style={col25}>
                                       
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </main>
          




     
      </div>
    );
  }
}

export default App;
