import React , { useEffect , useState } from 'react';
import { Grow , Grid , Container } from "@material-ui/core";
import Form from "../Form/Form";
import Reviews from '../Reviews/Reviews';
import { useDispatch } from 'react-redux';
import { getrvs } from '../../actions/posts';
import useStyles from "./styles";

export const Home = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId , setCurrentId] = useState(null);
    console.log(currentId);
    useEffect(() => {
    dispatch(getrvs());
    }, [currentId, dispatch]);

    return (
        <Grow in>
        <Container>
          <Grid container className={classes.main}  justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Reviews setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    )
}
export default Home;