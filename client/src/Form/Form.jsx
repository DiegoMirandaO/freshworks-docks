import { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import PlaceTimeSection from './PlaceTimeSection';
import FoodSection from './FoodSection';
import Title from './Title';
import { useStyles } from './styles';





function Form() {
  const classes = useStyles();
  const [place, setPlace] = useState("");
  const [time, setTime] = useState("07:30");
  const [foodType, setFoodType] = useState("");
  const [foodWeight, setFoodWeight] = useState(0);
  const [ducksFedCount, setDucksFedCount] = useState(1);
  const [recurentFeed, setRecurentFed] = useState(false);
  
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
      case "food-type":
        console.log("Food Type");
        setFoodType(event.target.value);
        break;
      case "food-weight":
        console.log("Food Weight");
        setFoodWeight(event.target.value);
        break;
      case "docks-count":
        console.log("Docks");
        setDucksFedCount(event.target.value);
        break;
      case "Recurrent":
        console.log("Recurrent");
        setRecurentFed(event.target.value);
        break;
      default:
        break;
    }
    console.log(place, time, foodType, foodWeight, ducksFedCount, recurentFeed)
  };

  const handleSubmit = (event) => {
    console.log(place, time)
    console.log(event)
    alert('A name was submitted: ');
    event.preventDefault();
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
          defaultFoodType={foodType}
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
