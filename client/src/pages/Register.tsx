import { Grid, makeStyles } from '@material-ui/core'
import RegisterForm from '../components/Auth/Register-Form'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: `url(../../assets/img/backgrounds/register.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  formContainer: {
    display: 'flex', 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}))

const Register = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container>
      <Grid item lg={3} md={4} xs={11} className={classes.formContainer}>
        <RegisterForm />
      </Grid>
    </Grid>
  );

}

export default Register
