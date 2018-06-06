import React from 'react';
import { Button, Typography, MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Pages from './Pages.jsx';
import Card from './Card.jsx';
import Home from './Home.jsx';
import model from './model.js';

const primary = '#9b5d30';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary,
      contrastText: '#fff'
    },
    secondary: {
      main: '#000000',
      contrastText: primary
    }
  }
});

class App extends React.Component {
  constructor(props) {
    let author = undefined;
    function getAuthor() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          author = xhr.responseText;
        }
      };
      xhr.open('GET', '/author', false);
      xhr.send();
    }
    super(props);
    getAuthor();
    this.state = { author: author };
  }
  render() {
    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/brrto" component={Pages.Brrto}/>
            <Route path="/pezza" component={Pages.Pezza}/>
            <Route path="/fesh" component={Pages.Fesh}/>
            <Route path="/soop" component={Pages.Soop}/>
            <Typography variant="body1">{this.state.author}</Typography>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
