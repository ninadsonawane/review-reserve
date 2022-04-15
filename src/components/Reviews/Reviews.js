import React from "react";
import Review from "./Review/Review";
import { useSelector } from "react-redux";
import { CircularProgress , Grid } from "@material-ui/core"
import useStyles from './styles';

const Reviews = ({ setCurrentId }) => {
  const reviews = useSelector((state) => state.reviews);
  const classes = useStyles();
  return (
    !reviews.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {reviews.map((review) => (
            <Grid key={review._id} list xs={12} sm={6} md={6}>
              <Review review={review} setCurrentId={setCurrentId} />
            </Grid>
          ))
        }
      </Grid>
    )
  );

};
export default Reviews;
