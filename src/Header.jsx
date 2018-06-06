import React from 'react';
import { AppBar, Toolbar, Typography, Button, withStyles } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "#317EFB"
  },
  flex: {
    flex: 1,
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openDrawer = this.openDrawer.bind(this);
  }
  openDrawer() {
    this.setState({open: true});
  }
  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit" className={this.props.classes.flex}>
              Tony's Favorite Foods
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
