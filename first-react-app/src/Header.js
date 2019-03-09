import React from 'react';
//import styles from './styles.css'

const TopHeaderNav =  {
    float: 'right', 
    //backgroundColor: 'grey',
    listStyleType: 'none'
}
const TopHeaderItem = {
    float: 'left',
    padding: '5px',
    fontSize: '10px',
}
const TopHeaderLink = {
    color: 'white'
}


const Header = ({ menu }) => (
    <ul style={TopHeaderNav} >
        {
            menu.map(({ key, value }) => (<li style={TopHeaderItem} key={key}> <a style={TopHeaderLink} href={'#'}>{value}</a> </li>))
        }
    </ul>
); 
export default Header;
