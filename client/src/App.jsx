import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '@fontsource/roboto';
import './App.css';
import DockForm from './Form';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={`App ${classes.root}`}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <DockForm/>
          </Paper>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default App;
