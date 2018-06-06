import React from 'react';
import { Card as MaterialUICard, CardActions, CardContent, CardMedia, Button, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit
  },
  card: {
    width: 300
  },
  media: {
    height: 0,
    paddingTop: '56.25%'
  }
});

class Card extends React.Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <MaterialUICard className={this.props.classes.card}>
          <CardMedia className={this.props.classes.media}
            image={this.props.image} />
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="p">
              {this.props.description}
            </Typography>
          </CardContent>
          <CardActions className={this.props.classes.actions}>
            <Button size="small" color="primary" variant="raised" component={Link} to={this.props.route}>
              Pros & Cons
            </Button>
          </CardActions>
        </MaterialUICard>
      </div>
    );
  }
}

export default withStyles(styles)(Card);
