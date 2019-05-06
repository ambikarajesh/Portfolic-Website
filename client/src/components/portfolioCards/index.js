import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    width: '25%',
    background: 'rgba(20, 41, 51,0.5)',
    margin:'20px',
    border:'2px solid #666'
  },
  media: {
    height: 140,
  },
};

const MediaCard = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}
                image={props.image}
                title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{color:'#43DDE0'}}>
                        {props.title}
                    </Typography>
                    <Typography component="p" style={{color:'#ccc'}}>
                       {props.content}
                    </Typography>
                </CardContent>
            </CardActionArea>       
        </Card>
    );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);