import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  mainHeading:{
    marginTop:'10px',
    marginBottom:'10px',
  },
  appbar : {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',           //saare content ko center la diya
    alignItems: 'center',
    position:"sticky",
     marginBottom:'1.5%'
  },
  largeIcon: {
    width: 60,
    height: 60,
    marginRight: '170px',
    marginTop:'10px',
    marginBottom:'10px',
    
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',

  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    margin:'0'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    color: 'white',
    textDecoration: 'none',
    marginRight:'27px',
    paddingRight:'15',
    display:'flex'
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  signin: {
    color:'white',
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    
  },
 
  
  
}));

