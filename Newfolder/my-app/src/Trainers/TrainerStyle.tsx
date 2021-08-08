import { makeStyles } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";

const useTrainerStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "5%",
    marginLeft: "5%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
  hoverCard: {
    backgroundColor: "skyblue",
    transition: "0.5s ease",
    opacity: 0.7,
    width: "345px",
    height: "100%"
    
  },
  test:{
     
    width: "345px",
    height: "100%"
    
  }
});

export default useTrainerStyles;
