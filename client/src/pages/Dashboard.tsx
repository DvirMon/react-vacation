import { FunctionComponent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Sidebar from '../components/Dashboard/Sidebar';
import AppBar from '../components/Dashboard/TopBar';
import { Outlet } from 'react-router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      display: 'flex',
    },
    toolbar: {
      height: '8vh',
    },
    content: {
      height: '92vh',
      width: '100%'
    },
  }),
);

const Dashboard: FunctionComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;