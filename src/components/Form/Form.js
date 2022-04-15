import React , { useState , useEffect } from "react";
import { TextField , Typography , Paper , Button  } from "@material-ui/core";
import FileBase64 from 'react-file-base64';
import useStyles from './styles.js';
import { useDispatch , useSelector } from 'react-redux';
import { createrv , updaterv } from '../../actions/posts.js';

const Form = ({ currentId , setCurrentId}) => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const [postData , setPostData] = useState({book: "",author: "",genre: "",review:"",selectedFile: "",});
  const classes = useStyles();
  const review = useSelector((state) => (currentId ? state.reviews.find((rv) => rv._id === currentId) : null));
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updaterv(currentId , { ...postData , name: user?.result?.name }));
    }else{
      dispatch(createrv({ ...postData , name: user?.result?.name }));
    }
   clear();
  }
  useEffect(() => {
    if(review) setPostData(review);
  }, [review]);


  const clear = () => {
    setCurrentId(0);
    setPostData({book: "",author: "",genre: "",review:"",selectedFile: "",});
  };
  console.log(!user?.result?.name);

  if(!user?.result?.name){
    return (
      <Paper className={classes.paper}>
      <Typography variant="h6" align="center">
     Please Signin or Signup to create your personal post and also like other people's post
      </Typography>
      </Paper>
    );
   
  } 
  return (
    <Paper className={classes.paper}>
    <form className={classes.form} autoComplete="off" noValidate onSubmit={handleSubmit}>
    <Typography className={classes.input}   variant="h5">{currentId ? 'Editing' : 'Creating' } Review!</Typography>
    <TextField className={classes.input}  value={postData.book} name="book" fullWidth label="Reviewing Book" variant="outlined" onChange={(e) => setPostData({...postData, book:e.target.value}) }/>
    <TextField className={classes.input}  value={postData.author} name="author"  fullWidth label="Book Author" variant="outlined" onChange={(e) => setPostData({...postData, author:e.target.value}) }/>
    <TextField className={classes.input}  multiline value={postData.review}  name="review" fullWidth label="Your Review" variant="outlined" onChange={(e) => setPostData({...postData, review:e.target.value}) }/>
    <TextField className={classes.input} value={postData.genre}  name="genre"  fullWidth label="Genre" variant="outlined" onChange={(e) => setPostData({...postData, genre:e.target.value}) }/>
    <div className={classes.fileInput} ><FileBase64 multiple={ false } onDone={({base64}) => setPostData({...postData , selectedFile: base64})} /></div>
    <Button className={classes.button} color="primary"  variant="contained" size="large" type="submit" > Submit </Button>
    <Button className={classes.button} color="secondary" onClick={clear} variant="contained"  size="large" >Clear </Button>
    </form>
    </Paper> 


  );
}
export default Form;
