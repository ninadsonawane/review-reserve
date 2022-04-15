import { makeStyles } from "@material-ui/core/styles";

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
    paddingLeft: '10px',
    marginTop:'10px',
    marginBottom:'10px',
  },
  [theme.breakpoints.down('sm')] : {
    main:{
      flexDirection:"column-reverse"
    }
  }
  
}));
