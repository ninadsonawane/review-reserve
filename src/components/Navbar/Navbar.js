import React , { useState , useEffect } from "react";
import { useDispatch } from "react-redux";
import  useStyles from "./styles";
import { AppBar , Typography , Toolbar , Button, Avatar } from "@material-ui/core";
import MenuBookSharpIcon from '@material-ui/icons/MenuBookSharp';
import { Link , useHistory , useLocation} from "react-router-dom";
import decode from 'jwt-decode';
                                              
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user , setUser ] = useState(JSON.parse(localStorage.getItem('profile')));
   useEffect(() => {
     const token = user?.token;
     if (token) {
       const decodedToken = decode(token); 
       if(decodedToken.exp * 1000 < new Date().getTime()) logout();
     }
     setUser(JSON.parse(localStorage.getItem('profile')))
   }, [location])
  
  const logout = () => {
    dispatch({ type : 'LOGOUT'})
    history.push('/');
    setUser(null);
  }
  return (
    <AppBar className={classes.appbar}  position='sticky' align="center">
    <div className={classes.brandContainer}>
    <Typography component={Link} to="/" className={classes.heading} variant="h2">Review-Reserve</Typography>
    <MenuBookSharpIcon className={classes.largeIcon} />
    </div>
    <Toolbar className={classes.toolbar}>
    { user ? (
     <div className={classes.profile}>
     <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
     <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
     <Button variant="contained" color="secondary" className={classes.logout} onClick={logout} >LogOut</Button>
     </div>
    ) : (
    <Button className={classes.signin} component={Link} to="/auth" variant="contained" color="primary">Sign-In</Button>
    )}
    </Toolbar>
    </AppBar>
  );
};

export default Navbar;

