import { Grid, makeStyles } from "@material-ui/core";
import { FunctionComponent } from "react";
import VacationScreen from "../components/Vacation/VacationsScreen";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundImage: `url(../../assets/img/backgrounds/user.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}))

const Vacations: FunctionComponent = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} container>
      <Grid item xl={12} lg={12} md={12} xs={12}>
        <VacationScreen/>
      </Grid>
    </Grid>
  );
}

export default Vacations;