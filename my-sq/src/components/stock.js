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

export default function MediaCard() {
  const classes = useStyles();

  return (
<div class='row-posters'>
    <div class= 'row-poster'>
    <Card className={classes.root}>
<CardActionArea>
<CardMedia
className={classes.media}
image="stock.jpg"
title="Basics of Stock Market"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Stock Market
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
If you are a market newbie.
This short series will help you understand the market basics including the IPO markets,market events etc.
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
image="pf.jpg"
title="Basics of Stock Market"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
Personal Finance
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
Personal finance,as a term,covers the concepts of managing your money,saving and investing.
It also includes banking,insurance,investments,tax planning etc.
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
image="mt.jpg"
title="Basics of Stock Market"
/>
<CardContent>
<Typography gutterBottom variant="h5" component="h2">
 Markets and Taxation
</Typography>
<Typography variant="body2" color="textSecondary" component="p">
As a stock market enthusiast,one should be aware of all the taxes that are levied on your investments.
Know more about Investing/Trading in the Markets.
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
