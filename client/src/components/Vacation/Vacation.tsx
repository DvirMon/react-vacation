import { Grid } from '@material-ui/core';
import { FunctionComponent } from 'react';
import CardContainer from '../CardContainer'
export interface VacationProps {

}

const Vacation: FunctionComponent<VacationProps> = () => {
  return (
    <CardContainer>
      <Grid container >
        <Grid item lg={12}>

        </Grid>
      </Grid>
    </CardContainer>
  );
}

export default Vacation;