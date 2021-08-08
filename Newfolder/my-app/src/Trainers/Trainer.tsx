import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import useTrainerStyles from "./TrainerStyle";
import image from "./sabin.png";
import { useState } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";

const Trainer = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const classes = useTrainerStyles();
  return (
    <Card
      className={classes.root}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {!hovered ? (
        <Box className={classes.test}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                TrainerName
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Trainer short description Trainer short description Trainer
                short description Trainer short description Trainer short
                description
              </Typography>
            </CardContent>
          </CardActionArea>
        </Box>
      ) : (
        <Box className={classes.test}>
          <CardActionArea className={classes.hoverCard}>
            <CardContent>
              <FacebookIcon />
            </CardContent>
          </CardActionArea>
        </Box>
      )}
      {/* <CardActions>
       
      </CardActions> */}
    </Card>
  );
};

type Props = {
  id: number | undefined;
  name: string | undefined;
  technology: string | undefined;
  facebook: string | undefined;
  twiter: string | undefined;
  linkedIn: string | undefined;
  shortDescription: string | undefined;
  photo: string | undefined;
};
export default Trainer;
