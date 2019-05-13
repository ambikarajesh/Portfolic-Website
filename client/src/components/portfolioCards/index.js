import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import style from './portfolioCards.module.css';
import Zoom from 'react-reveal/Zoom';
import {connect} from 'react-redux';
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

class MediaCard extends React.Component {   
    deleteHandler = () => {
      console.log('click')
    }
    render(){
      const { classes } = this.props;
        return (           
            <div  className={style.cards}>
            <Zoom duration={2000}>
                <Card className={classes.card}>
                <a href={this.props.link}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={this.props.image}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" style={{color:'#43DDE0', fontSize:'15px'}}>
                                {this.props.title}
                            </Typography>
                            <Typography component="p" style={{color:'#ccc', fontSize:'12px'}}>
                                {this.props.languages}
                            </Typography>                        
                        </CardContent>
                    </CardActionArea>
                    </a>
                    {this.props.isAuth ?
                    (<CardActions>
                      <Button size="small" color="secondary" style={{width:'50%',margin:'2px auto'}} onClick={this.deleteHandler}>
                        Delete
                      </Button>
                    </CardActions>) :  null }
                </Card>                
                </Zoom> 
                </div>          
        );
    }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};
const mapStateToProps = state => {
  return {
      isAuth: state.userReducer.userId !== null
  }
}
export default connect(mapStateToProps)(withStyles(styles)(MediaCard));