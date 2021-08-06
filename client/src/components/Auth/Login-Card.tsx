import { Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { useNavigate } from 'react-router'

import clsx from 'clsx'

import './Login-Card.scss'

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    top: "5%",
    width: '70%',
    height: '30%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: theme.palette.background.paper,
  },
  text: {
    margin: theme.spacing(2)
  },
  button: {
    paddingTop: theme.spacing(2),
    paddingLeft: 14,
  }
}))

const Login = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  return (
    <Card className={clsx(classes.card, 'fade-up')}>
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography className={classes.text} variant="h2">Explore destinations around the world!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} variant="h4">Open an account for more information!</Typography>
          </Grid>
          <Grid item className={classes.button}>
            <Button
              disableRipple
              className="text-buttons auth"
              variant="contained"
              color="secondary"
              onClick={() => navigate('register')}
            >
              Open an Account !
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

}

export default Login
