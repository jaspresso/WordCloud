import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const Root = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: 'auto',
}));

class AppShell extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        toggle: false
      };
    }

    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})

    render(){
      return (
        <Root>
          <AppBar position="static">
            <Box>
              <MenuButton color="inherit" onClick={this.handleDrawerToggle}>
                <MenuIcon/>
              </MenuButton>
            </Box>
          </AppBar>
          <Drawer open={this.state.toggle} onClose={this.handleDrawerToggle}>
            <MenuItem onClick={this.handleDrawerToggle}>Home</MenuItem>
          </Drawer>
        </Root>
        );
    }
}

export default AppShell;