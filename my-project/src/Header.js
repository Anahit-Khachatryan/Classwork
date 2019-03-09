import React, { Component } from 'react';

//import styles from './styles.css'

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

const Header = () => (
    <ul  >
        {
            menu.map(({ key, value }) => (<li  key={key}> <a href={'#'}>{value}</a> </li>))
        }
    </ul>
); 
export default Header;
