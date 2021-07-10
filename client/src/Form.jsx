import { useState } from 'react';
import { InputLabel, FormHelperText, TextField, Grid, Typography, FormControl, Input, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    textAlign: 'left',
  },
  inputLabel: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

function Form() {
  const classes = useStyles();
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("07:30");
  
  const handleChange = (event) => {
    switch (event.target.id) {
      case "place-fed":
        console.log("Place");
        setPlace(event.target.value);
        break;
      case "time-fed":
        console.log("Time");
        setTime(event.target.value);
        break;
    
      default:
        break;
    }
    console.log(place, time)
  };

  const handleSubmit = (event) => {
    console.log(place, time)
    console.log(event)
    alert('A name was submitted: ');
    event.preventDefault();
  }
  
  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
      <Grid container spacing={3}>
        <Title />
        <PlaceTimeSection
          defaultTime={time}
          handleChange={handleChange}/>
        </Grid>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Feed Ducks
        </Button>
    </form >
  );
}


function Title() {
  return (
    <Grid item xs={12}>
      <Typography variant="h2">
        Duck Feed
      </Typography>
    </Grid>
  );
}

function PlaceTimeSection(props) {
  const { handleChange, defaultTime } = props;
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom className={classes.textField}>
          When and where?
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Input
          id="place-fed"
          style={{ margin: 8 }}
          placeholder="Place"
          type='text'
          fullWidth
          required
          onChange={(event)=>{ handleChange(event)}}
        />
      </Grid>
      <Grid item xs={3}>
        <Input
          id="time-fed"
          type="time"
          style={{ margin: 8 }}
          defaultValue={defaultTime}
          className={classes.inputLabel}
          onChange={(event)=>{handleChange(event)}}
          required
          inputProps={{
            step: 900, // 15 min
          }}
        />
      </Grid>
    </>
  );
}

export default Form;
