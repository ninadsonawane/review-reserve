import React from "react";
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@material-ui/core"
import useStyles from './styles';
import moment from "moment";
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import { deleterv  , likerv } from "../../../actions/posts";

const Review = ({ review , setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (review.likes.length > 0) {
      return review.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon className={classes.like} fontSize="small" />&nbsp;{review.likes.length > 2 ? `You and ${review.likes.length - 1} others` : `${review.likes.length} like${review.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined className={classes.like} fontSize="small" />&nbsp;{review.likes.length} {review.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
        }
        
        return <><ThumbUpAltOutlined className={classes.like} fontSize="small" />&nbsp;Like</>;
      };
      
      
  return (

    <Card className={classes.card} p={2}>
      <CardMedia className={classes.media} image={review.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
        <div className={classes.overlay}>
         <Typography variant="h6">{review.name}</Typography>
         <Typography variant="body2">{moment(review.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === review?.creator || user?.result?._id === review?.creator ) && (
        <div className={classes.overlay2}>
         <IconButton><EditIcon onClick={() => setCurrentId(review._id)} style={{ color: 'white' }} size="small"/></IconButton>
        </div>
          
          )}


       <Typography className={classes.title} variant="h4" gutterBottom  component="h2">{review.book}</Typography>
       <Typography   variant="body2" variant="h6" >  ~ {review.author}</Typography>

        <CardContent className={classes.cardContent} >
       <Typography variant="body1" color="textSecondary" component="p">{review.review}</Typography>

      </CardContent>
      <Typography variant="h6" gutterBottom className={classes.titlegenre}>[ {review.genre} ]</Typography>
      <CardActions className={classes.cardActions}>
      <IconButton className={classes.like} disabled={!user?.result} onClick={() => { dispatch(likerv(review._id))}}>
        <Likes />
        </IconButton>
        {(user?.result?.googleId === review?.creator || user?.result?._id === review?.creator ) && (
          <IconButton onClick={() => dispatch(deleterv(review._id))}><DeleteIcon /></IconButton>
          
          )}
      </CardActions>
 
    </Card>
  );
}
export default Review;
