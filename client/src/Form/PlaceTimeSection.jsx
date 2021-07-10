import { Grid,Input, } from '@material-ui/core';
import { useStyles } from './styles';
import Title from './Title';

function PlaceTimeSection(props) {
    const { handleChange, defaultTime } = props;
    const classes = useStyles();
    return (
      <>
        <Grid item xs={12}>
          <Title text="When and where?"/>
        </Grid>
        <Grid item xs={4}>
          <Input
            id="place-fed"
            placeholder="Place"
            type='text'
            required
            className={classes.inputText}
            onChange={(event)=>{ handleChange(event)}}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            id="time-fed"
            type="time"
            defaultValue={defaultTime}
            className={classes.input}
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

export default PlaceTimeSection;