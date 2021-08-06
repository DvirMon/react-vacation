import { Avatar, Grid, Hidden, makeStyles, Typography } from "@material-ui/core";
import { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(3),
  },
  header: {
    display: 'flex',
    justifyContent: 'center'
  },
  avatarContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  cardTitle: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
  }
}));

export interface LoginTitleProps {

}

const LoginTitle: FunctionComponent<LoginTitleProps> = () => {

  const classes = useStyles();

  return (

    <Grid container className={classes.headerContainer}>
      <Grid item lg={3} md={3} className={classes.avatarContainer}>
        <Avatar
          src="/assets/img/logo.png"
          alt="Logo"
          className={classes.avatar}
        />
      </Grid>
      <Grid item lg={4} md={2} xs={2} className={classes.cardTitle}>
        <Typography variant="h1" >Travel-On</Typography>
      </Grid>
    </Grid>
  );
}

export default LoginTitle;