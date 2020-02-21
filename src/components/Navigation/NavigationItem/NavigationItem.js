import React from 'react';
import {ListItem} from '@material-ui/core'

import classes from './NavigationItem.module.css'
import {NavLink} from 'react-router-dom';

const NavigationItem = (props) => (
    <li className = {classes.NavigationItem}>
    <NavLink
    to={props.link} exact
    //  activeClassName = {classes.active}>
    activeClassName = "active">

    <ListItem>
     {props.children}
    </ListItem>
      
    </NavLink>
    </li>
);

export default NavigationItem;