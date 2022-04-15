import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  input: {
    margin: "7px 3px",
  },
  button: {
    margin : "10px",
  },
  heading:{
    margin:"5px",
  },
  form: {
    margin:"15px",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  paper: {
    padding: theme.spacing(2),
    margin:"10px"
  }
}));
