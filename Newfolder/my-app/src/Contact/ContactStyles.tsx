import { makeStyles } from "@material-ui/core";

const useContactStyles = makeStyles((theme) => ({
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "2%",
    width: '45%',
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "2%",
    widht:'35%'
  },
  container: {
    display: "flex",
    padding: "2%",
    justifyContent: "center",
    alignItems: "flex-start",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Mark Pro",
  },
  input: {
    marginTop: "2%",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  bold: {
    fontWeight: 700,
    marginLeft: '5px',
    marginRight: '5px'
  },
  pFont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:'4%'
  },
  sendIcon: {
    marginLeft: "2px",
  },
  sendButton:{
      marginTop: "2%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
  },
  circle: {
    border: '3px solid #FFF',
    borderRadius: '20px',
    boxShadow: '0 0 0 2px #888',
    width: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    padding:'5px'
  },
  boxInfo:{
      marginLeft:'10%',
      display: 'flex',
      flexDirection: 'column'
  },
  socialBox:{
      display: 'flex',
      width:'100%',
      justifyContent: 'space-between',
    alignItems: 'center'
  },
  socialBoxStyle:{
      marginTop:'5%',
      marginLeft:'5%'
  },
  socialBoxStyleFirstItem:{
    marginTop:'5%',
}
}));

export default useContactStyles;
