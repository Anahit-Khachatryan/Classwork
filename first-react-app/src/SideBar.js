import React from 'react';
import PropTypes from 'prop-types';

const NavBar = {
    backgroundColor: 'grey',
    listStyleType: 'none'
}
const navItem = {
    padding: '5px',
    fontSize: '10px'
}
const navLink = {
    color: 'white'
}

const SideBar = ({ items }) => (
    
    <ul style={NavBar}>
        {
            items.map(({ key, value }) => (<li style={navItem} key={key}> <a style={navLink}href={'#'}>{value}</a> </li>))
    }



    </ul>
); 


export default SideBar;



