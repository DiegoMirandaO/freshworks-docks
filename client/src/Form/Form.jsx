import { useEffect, useState } from 'react';
import {getFeds, postFed} from '../Utils/Api';
import { Grid, Button } from '@material-ui/core';
import PlaceTimeSection from './PlaceTimeSection';
import FoodSection from './FoodSection';
import Title from './Title';
import { useStyles } from './styles';

function Form() {
  const classes = useStyles();
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("07:30");
  const [foodType, setFoodType] = useState("default");
  const [foodWeight, setFoodWeight] = useState(0);
  const [ducksFedCount, setDucksFedCount] = useState(1);
  const [recurentFeed, setRecurentFed] = useState(false);
  
  const handleChange = (event) => {
    switch (event.target.id) {
      case "place-fed":
        setPlace(event.target.value);
        break;
      case "time-fed":
        setTime(event.target.value);
        break;
      case "food-type":
        setFoodType(event.target.value);
        break;
      case "food-weight":
        setFoodWeight( Number.parseInt(event.target.value));
        break;
      case "docks-count":
        setDucksFedCount(event.target.value);
        break;
      case "Recurrent":
        setRecurentFed(event.target.value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = (event) => {
    try {
      if(!place || !time || !foodType|| !foodWeight || !ducksFedCount || recurentFeed === undefined) {
        throw new Error('Incomplete data');
      }
      postFed(ducksFedCount, place, time, foodType, foodWeight, recurentFeed);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <form  noValidate autoComplete="off" onSubmit={handleSubmit} >
      <Grid container spacing={3}>
        <Grid item xs={12}> 
        <Title text="Feed Ducks" header />
        </Grid>
        <PlaceTimeSection
          defaultTime={time}
          handleChange={handleChange}/>
        <FoodSection 
          foodType={foodType}
          defaultFoodWheight={foodWeight}
          handleChange={handleChange}/>
        <Grid item xs={6}> 
          <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.submit}>
            Feed
          </Button>
        </Grid>
      </Grid>
    </form >
  );
}

export default Form;
