import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Containercss.css';

const menuItems = [
    {name: 'Women', subMenus: [{name: 'Tops'}, {name: 'Knitwear'}, {name: 'Coats & Jumpers'}]},
    {name: 'Children', subMenus: [{name: 'Baby Girls 0-3 years'}, {name: 'Girls 3-13 years'}, {name: 'Baby Boys 0-3 years'}, {name: 'Baby Boys 3-13 years'},]},
    {name: 'Men'},
    {name: 'Gifts & Homeware', subMenus: [{name: 'Home & Accesorize'}, {name: 'Photo Frames'}, {name: 'All Gifts'}]},
  ]
const Container  = function () {
    return (
        <div className="container">
        <ul className = 'navBar'>
            {menuItems.map(function(menuItem, i) {
                if (menuItem.subMenus != undefined) {
                    
                    return (
                        
                        <li key={i}>
                        
                          <a href = {'#'}>  {menuItem.name} </a>
                            <ul>
                            {menuItem.subMenus.map(function(subMenu, i) {
                                return <li key={i}><a href={'#'}>{subMenu.name}</a></li>;
                            })}
                            </ul>
                            </li>
                        
                    );  
                } else {
                    return (
                        
                        <li key={i}><a href = {'#'}>{menuItem.name}</a></li>
                        
                    )
                }
            })}
            </ul>
        </div>
    );
}

export default Container;