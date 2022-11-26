
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PropTypes from "prop-types";
import HomeIcon from '@mui/icons-material/Home';
import ExtensionIcon from '@mui/icons-material/Extension';
import PhoneIcon from '@mui/icons-material/Phone';

/* import your desired icon from mui icons library */
import {NavLink} from 'react-router-dom';


export const publicNavs = [
    {
        url:'/home',
        name:'Home',
        icon:<HomeIcon/>
    },
    {
        url:'/products',
        name:'Products',
        icon:<ExtensionIcon/>
    }
    // add new Nav links here as a json object, in this file the public navigations
];



export default  ()=>(
publicNavs.map((navItem)=>{
return <NavLink to={navItem.url}  className="NavLinkItem" key={navItem.url} activeClassName="NavLinkItem-selected"> <List component="nav" >  <ListItem button>
          <ListItemIcon className="innernavitem"> 
 {navItem.icon}
          </ListItemIcon>
          <ListItemText primary={navItem.name} className="innernavitem" color="black"/>
        </ListItem></List> </NavLink>
})


     

);





