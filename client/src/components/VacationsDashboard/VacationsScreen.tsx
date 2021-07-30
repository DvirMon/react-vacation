import { makeStyles } from "@material-ui/core";
import { FunctionComponent } from "react";


export interface VacationScreenProps {

}

const useStyles = makeStyles((theme) => ({
  vacations: {
  },
}))


const VacationScreen: FunctionComponent<VacationScreenProps> = () => {

  const classes = useStyles()
  return (
    <div className={classes.vacations}>
    </div>
  );
}

export default VacationScreen;