import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { Container} from '@material-ui/core';
import {Container,Col,Row} from 'react-bootstrap';
import './stock.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    
    padding: 40,
  },
  media: {
    height: 250,
  },
});

export default function MediaCardRow2() {
  const classes = useStyles();

  return (
<div class='row-posters'>
    <div class= 'row-poster'>
    <Card className={classes.root}>
<CardActionArea>
<CardMedia
className={classes.media}
image="books.jpeg"
title="Financial Books"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Financial Books
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
If you are a market newbie.
Here are some of the best collections of books on finance.
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button size="small" color="primary">
Share
</Button>
<Button size="small" color="primary">
Learn More
</Button>
</CardActions> 
</Card>
     
    </div >



    <div class= 'row-poster'>
    <Card className={classes.root}>
<CardActionArea>
<CardMedia
className={classes.media}
image="technical.jpg"
title="Basics of Stock Market"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Technical Analysis
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Technical Analysis is another importent topics this covers Japanese candlestick patterns,volumes analysis,
support,resistance,indicators,Dow Theory etc.

</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button size="small" color="primary">
Share
</Button>
<Button size="small" color="primary">
Learn More
</Button>
</CardActions> 
</Card>
    </div>


    <div class= 'row-poster'>
    <Card className={classes.root}>
<CardActionArea>
<CardMedia
className={classes.media}
image="podcast.jpg"
title="Podcast"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
 Financial Podcast
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
As a stock market enthusiast,one should always be know about the day to day events happening in that sector.
Here are some of the best podcasts for you.
</Typography>
</CardContent>
</CardActionArea>
<CardActions>
<Button size="small" color="primary">
Share
</Button>
<Button size="small" color="primary">
Learn More
</Button>
</CardActions> 
</Card>
    </div>    
    </div>

    
  );
}
