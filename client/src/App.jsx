import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import '@fontsource/roboto';
import './App.css';
import DockForm from './Form/Form';
import FoodType from './Reports/FoodTypeBars';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 680,
    padding: theme.spacing(2),
    marginTop: theme.spacing(1),
    textAlign: 'left',
    margin: 'auto',
    color: theme.palette.text.secondary,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={`App`}>
      <Grid   className={classes.container}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <DockForm/>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FoodType/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
