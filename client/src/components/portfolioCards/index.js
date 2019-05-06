import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import style from './portfolioCards.module.css';
import Zoom from 'react-reveal/Zoom';

const styles = {
  card: {
    width: '80%',
    height:'100%',
    background: 'rgba(20, 41, 51,0.5)',
    border:'2px solid #666',
    margin:'10px auto'
  },
  media: {
    height: 100,
  },
};

const MediaCard = (props) => {
    const { classes } = props;
    return (
        
        <div className={style.cards}>
        <Zoom duration={2000}>
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
            </Zoom>
        </div>
    );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);