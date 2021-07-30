import { FunctionComponent } from "react";
import {
  AppBar as Bar,
  Typography,
  Toolbar,
  makeStyles,
  createStyles,
  Theme
} from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

export interface AppBarProps {

}

const AppBar: FunctionComponent<AppBarProps> = () => {

  const classes = useStyles()
  return (<Bar
    position="fixed">
    <Toolbar>
      <Typography variant="h6" noWrap>
        Mini variant drawer
      </Typography>
    </Toolbar>
  </Bar>);
}

export default AppBar;