import { Grid, Hidden, makeStyles } from '@material-ui/core'
import LoginForm from '../components/Auth/Login-Form'
import LoginCard from '../components/Auth/Login-Card/Login-Card'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  login: {
    height: '100%',
    backgroundImage: 'url(../../assets/img/backgrounds/login.jpeg)',
    backgroundRepeat: 'no-repeat',
    backgroundPositionY: '15%',
    backgroundPositionX: '92%',
    overflowX: 'hidden'
  },
  loginForm: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(5px)',
  }
}))

const Login = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.login} container>
      <Hidden smDown>
        <Grid item xl={7} lg={7} md={7} className={classes.root}>
          <LoginCard />
        </Grid>
      </Hidden>
      <Grid item xl={5} lg={5} md={5} xs={12} className={classes.loginForm}>
        <LoginForm />
      </Grid>
    </Grid>
  );

}

export default Login
