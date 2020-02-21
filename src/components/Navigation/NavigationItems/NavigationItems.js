import React from 'react';
import classes from './NavigationItems.module.css';
import {List, ListItem,ListItemText, Divider} from '@material-ui/core';
import {NavLink,useRouteMatch,Route} from 'react-router-dom';
import Aux from '../../Hoc/Auxilliary/Auxilliary'


const NavigationItems = (props) => {

    let match = useRouteMatch(); 

    let links = (
        
        <List className={classes.list}>
          {props.routes.map((prop, key) => {
            
            return (
                
            <Aux>
              {/* <NavLink
                to={prop.path}
                className={classes.NavigationItem}
                activeClassName={classes.active}
                key={key}
              > */}

              <NavLink
                to={`${match.url}/${prop.path}`}
                className={classes.NavigationItem}
                activeClassName={classes.active}
                key={key}
              >
              
                <ListItem button className = {classes.ItemLink}>
                <prop.icon className = {classes.ItemIcon} />
                  <ListItemText
                    primary={prop.name}
                    className={classes.ItemText}
                    disableTypography={true}
                  />
                </ListItem>
              </NavLink>
            </Aux>
            );
          })}
          {/* <NavLink to="/" className = {classes.Logout}>
            <ListItem>kk</ListItem>
          </NavLink> */}
          
          
        </List>

      );


      return (
        <div className={classes.sidebarWrapper}>
            {links}
        </div>
      );

        }
export default NavigationItems;