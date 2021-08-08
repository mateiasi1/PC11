import { Box, Typography } from "@material-ui/core";
import { useState } from "react";
import Trainer from "./Trainer";
import useTrainersStyles from "./TrainersStyles";

const Trainers = () => {
  const [props, setProps] = useState<Props[]>();

  const classes = useTrainersStyles();
  return (
    <>
      {/* {props!=undefined ?
    ( */}
      <Box className={classes.root}>
        <Trainer />
        <Trainer />
        <Trainer />
      </Box>
      {/* )
    :
    (<Typography>ddsfs</Typography>)
    } */}
    </>
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
export default Trainers;
