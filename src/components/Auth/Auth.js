import React , { useState } from 'react'
import { Typography , Container ,  Grid , Paper , Button ,Avatar} from '@material-ui/core';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';
import { GoogleLogin } from "react-google-login";  
import Icon from './icon'
import { useDispatch } from 'react-redux';
import { AUTH } from '../../constants';
import {  useHistory } from 'react-router-dom';
import { signup , signin } from '../../actions/auth';

const initialState = { firstName:'' , lastName:'' , email:'' , password:'', confirmPassword:''};
export const Auth = () => {
    const history = useHistory();
    const [formData, setFormData] = useState(initialState)
    const classes = useStyles();
    const dispatch = useDispatch();
    const [ showPassword , setShowPassword] = useState(false);
    const handleSubmit = (e) => {
       e.preventDefault();
      if (isSignup) {
        dispatch(signup(formData,history))
      } else {
        dispatch(signin(formData,history))

      }
      }
    const handleChange = (e) => {
       setFormData({ ...formData , [e.target.name]: e.target.value}); //[e.t.n] will dynamically input the field used.
    }
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
        
      }
    const googleSucess  = async (res) => {
        const result = res?.profileObj;    // ?. matlab vo error nhi throw krega agar res undefined h toh 
        const token = res?.tokenId;
        try {
          dispatch({ type: AUTH , data: {result,token} })
          history.push('/');
        } catch (error) {
          console.log(error);
        }
      };
    const googleFailure = () => {
       console.log("Try again!");
    };
    const [isSignup , setSignup] = useState(false);
    const switchmode = () => {
      setSignup((prev) => !prev) 
      setShowPassword(false)
    }
    
    return (
      <>
      <Container component="main" maxWidth="xs">
       <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? 'Sign-Up' : 'Sign-In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
        <Grid container  spacing={2}>
            {
            isSignup && (
                 <>  
                  <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half/>

                 </>
            )}
            <Input name="email" label="Email Address"  handleChange={handleChange} type="email" />
            <Input name="password" label="Password"    handleChange={handleChange}  type={ showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
            {
            isSignup && (
              <Input name="confirmPassword"  label="Confirm Password" handleChange={handleChange} type="password"/>
            )}
        </Grid>
        <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submit}>
        { isSignup ? 'Sign-Up' : 'Sign-In' }
        </Button>
        <GoogleLogin
        clientId="570965294700-2ghu78isric158aogcg4fgtg2a99l34c.apps.googleusercontent.com"
        render={(renderProps) => (
          <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
         Google Sign-In
          </Button> )}
          

          onSuccess={googleSucess}
          onFailure={googleFailure}
          cookiePolicy={'single_host_origin'}
        /> 
        <Button color="secondary" variant="outlined"  onClick={switchmode}>
        { isSignup ? "Already have account : Sign-In" : "Don't have account : Sign-Up" }
        </Button>
        
        </form>
       </Paper>
      </Container>
      </>
    )
}
//k4_JkYYwA38aH6aSAofVZ5WA