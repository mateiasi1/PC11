import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import ContactInput from "./ContactInput";
import useContactStyles from "./ContactStyles";
import SendIcon from "@material-ui/icons/Send";
import DraftsOutlinedIcon from "@material-ui/icons/DraftsOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

const Contact = () => {
  const classes = useContactStyles();
  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        Contact
      </Typography>
      <div className={classes.container}>
        <div className={classes.left}>
          <Typography>
            Pentru întrebări sau informații ce nu le poti găsi pe site, te
            invităm să ne contactezi:
          </Typography>
          <Typography className={classes.pFont}>
            <Box className={classes.circle}>
              <DraftsOutlinedIcon />
            </Box>
            <Box className={classes.boxInfo}>
              <span className={classes.bold}>Email Adress: </span>
              <a href="mailto:contact@primacriptomoneda.ro">
                contact@primacriptomoneda.ro
              </a>
            </Box>
          </Typography>
          <Typography className={classes.pFont}>
            <Box className={classes.circle}>
              <CallOutlinedIcon />
            </Box>
            <Box className={classes.boxInfo}>
              <span className={classes.bold}>Telefon: </span>
              <a href="tel:+40771155408">+40771155408</a>
            </Box>
          </Typography>
          <Box className={classes.socialBox}>
          <a href='https://www.facebook.com/PrimaCriptomoneda/' target='_blank'className={classes.socialBoxStyleFirstItem}><FacebookIcon color="primary" fontSize='large'/></a>
          <a href='https://www.instagram.com/primacriptomoneda/' target='_blank' className={classes.socialBoxStyle}><InstagramIcon color="secondary" fontSize='large'/></a>
      
          <a href='https://t.me/primacriptomoneda' target='_blank' className={classes.socialBoxStyle}><TelegramIcon style={{ color: green[500] }} fontSize='large'/></a>
       
          <a href='https://www.youtube.com/channel/UCGV_Z4worgG7TQvEbn9Qm8A' target='_blank' className={classes.socialBoxStyle}><YouTubeIcon style={{ color: red[500] }} fontSize='large'/></a>
          <a href='https://bitcointalk.org/index.php?topic=5280600' target='_blank' style={{ color: yellow[500] }} className={classes.socialBoxStyle}><Avatar aria-label="recipe" src="../bitcoinTalk.png">
          </Avatar></a>
          
          </Box>
        </div>
        <div className={classes.right}>
          <Typography variant="h4" className={classes.title}>
            Get in touch
          </Typography>
          <ContactInput className={classes.input} name={"Nume"} />
          <ContactInput className={classes.input} name={"Email"} />
          <TextField
            id="outlined-multiline-static"
            label="Cum te putem ajuta?"
            multiline
            className={classes.input}
            rows={4}
            variant="outlined"
          />
          <Button
            className={classes.sendButton}
            variant="contained"
            color="secondary"
          >
            Trimite <SendIcon className={classes.sendIcon} fontSize="small" />
          </Button>
        </div>
      </div>
      <hr/>
    </div>
  );
};
export default Contact;
