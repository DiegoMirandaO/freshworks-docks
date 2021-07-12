import { useState } from 'react';
import { postFed } from '../Utils/Api';
import { Grid, Button } from '@material-ui/core';
import PlaceTimeSection from './PlaceTimeSection';
import FoodSection from './FoodSection';
import Title from './Title';
import { useStyles } from './styles';
import DucksSection from './DucksSection';

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
      case "food-weight":
        setFoodWeight( Number.parseInt(event.target.value));
        break;
      case "recurrent":
        setRecurentFed(event.target.checked);
        break;
      default:
        break;
    }
  };

  const handleFoodType = (event) => {
    setFoodType(event.target.value);
  }

  const handleClick = (event) => {
    switch (event.target.innerHTML) {
      case "One":
        setDucksFedCount(1);
        break;
      case "Two":
        setDucksFedCount(2);
        break;
      case "Three":
        setDucksFedCount(3);
        break;
      case "Four":
        setDucksFedCount(4);
        break;
      case "Five":
        setDucksFedCount(5);
        break;
      default:
        break;
    }
  }


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
            handleChange={handleChange}
            handleFoodType={handleFoodType}/>
          <DucksSection 
            ducksNumber={ducksFedCount}
            handleClick={handleClick}
            recurentFeed={recurentFeed}
            handleChange={handleChange}/>
        <Grid item xs={12} className={classes.right}> 
          <Button variant="contained" color="primary" onClick={handleSubmit} className={classes.submit}>
            Feed
          </Button>
        </Grid>
      </Grid>
    </form >
  );
}

export default Form;
