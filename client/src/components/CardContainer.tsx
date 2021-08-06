import { Card, CardContent, Grid, makeStyles, Theme } from "@material-ui/core";
import { FunctionComponent } from "react";

const useStyles = makeStyles<Theme>((theme: Theme) => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    padding: theme.spacing(2)
  },
}))

export interface CardContainerProps {
}

const CardContainer: FunctionComponent<CardContainerProps> = (props) => {
  const { children } = props
  const classes = useStyles()
  return (
    <Grid container>
      <Grid item lg={12} xs={12}>
        <Card className={classes.card}>
          <CardContent >
            {children}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CardContainer;