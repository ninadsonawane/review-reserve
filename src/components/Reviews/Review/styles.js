import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
   card:{
     display:'flex',
     flexDirection: 'column',
     justifyContent: 'space-between',
     borderRadius: '15px',
     height: '100%',
     position: 'sticky',
     margin:'3%'

   },
   fullHeightCard: {
     height: '100%',
   },
   overlay: {
   position: 'absolute',
   top: '20px',
   left: '20px',
   color: 'white',
 },
 overlay2: {
   position: 'absolute',
   top: '20px',
   right: '20px',
   color: 'white',
 },
 border: {
   border:'solid',
 },
 media: {
  height: 0,
  paddingTop: '56.25%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  backgroundBlendMode: 'darken',
},
  title: {
    marginTop: '7px',
    marginBottom:'0',
    padding: '0 16px',
  },
  titlegenre:{
    position: 'absolute',
    right:'26%',
    bottom:'7px',
    
  

  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  like: {
    fontSize:'17px',
    paddingLeft:'0'
  }
}));
