import { makeStyles } from "@material-ui/core";
import { FunctionComponent, useEffect, useState } from "react";
import { environment } from "../../environment";
import { useHttp } from "../../hooks/useHttp";


export interface VacationScreenProps {

}

const VACATION_URL: string = `${environment.server}/api/vacations`


const useStyles = makeStyles((theme) => ({
  vacations: {
  },
}))


const VacationScreen: FunctionComponent<VacationScreenProps> = () => {

  const [vacations, setVacations] = useState([])
  const { get } = useHttp()

  const getVacations = async () => {
    const data = await get(VACATION_URL)
    console.log(data)
    setVacations([...data])
  }
  
  useEffect(() => {
    getVacations()
    return () => {
    }
  }, [vacations])



  const classes = useStyles()
  return (
    <div className={classes.vacations}>
    </div>
  );
}

export default VacationScreen;