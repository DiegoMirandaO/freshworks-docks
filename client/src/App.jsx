import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
import '@fontsource/roboto';
import './App.css';
import DockForm from './Form/Form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 680,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={`App ${classes.root}`}>
      {/* <Grid spacing={3} alignItems="center" alignContent="center" className={classes.container}>
        <Grid item xs={12}> */}
          <Paper className={classes.paper}>
            <DockForm/>
          </Paper>
        {/* </Grid> */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

export default App;
