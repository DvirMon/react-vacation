import { Avatar, Grid, Hidden, makeStyles } from "@material-ui/core";
import { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
  avatarContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  header : {
    height: 180,
    display: 'flex',
    justifyContent: 'center'
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  cardTitle: {

  }
}));

export interface LoginTitleProps {
  
}
 
const LoginTitle: FunctionComponent<LoginTitleProps> = () => {

  const classes = useStyles();

  return ( 
    <Grid className={classes.header} spacing={2} container>
    <Hidden xsDown>
      <Grid item lg={5} md={5} className={classes.avatarContainer}>
        <Avatar
          src="/assets/img/logo.png"
          alt="Logo"
          className={classes.avatar}
        />
      </Grid>
    </Hidden>
    <Hidden smUp>
      <Grid item xs={1}>
        <Avatar alt="Remy Sharp" src="assets/img/logo.png" />
      </Grid>
    </Hidden>
    <Grid item xs={10} lg={7} md={7} >
      <h1 className="card-title">Travel-On</h1>
    </Grid>
  </Grid>
   );
}
 
export default LoginTitle;