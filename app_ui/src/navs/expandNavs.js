import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Collapse from '@mui/material/Collapse';
import Grow from '@mui/material/Grow';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import LabelIcon from '@mui/icons-material/Label';
import {NavLink} from 'react-router-dom';


class ExpandNav extends React.Component{

state={
    componentsmenuopen:false
};

  handleClick=()=>{
    console.log('clicked');
    this.setState({componentsmenuopen:!this.state.componentsmenuopen});
  };

handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }

    this.setState({ componentsmenuopen: false });
  };

render(){
    
    return (<List component="nav">
 <ListItem button onClick={this.handleClick}>
            <ListItemIcon className="innernavitem">
              <LabelIcon />
            </ListItemIcon>
            <ListItemText inset primary="Components" />
            {this.state.componentsmenuopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.componentsmenuopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/forms"  className="NavLinkItem"><ListItem button >
                <ListItemIcon className="innernavitem">
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Forms" />
              </ListItem>
              </NavLink>
            </List>
          </Collapse>
           </List>); 
}

}


export default ExpandNav;

