import { Grid, InputLabel, ButtonGroup, Button, Checkbox } from '@material-ui/core';
import { useStyles } from './styles';
import Title from './Title';

function DucksSection(props) {
  const { handleClick, ducksNumber, recurentFeed, handleChange } = props;
  const classes = useStyles();
  return (
      <>
      <Grid item xs={12}>
        <Title text="Ducks" />

        <InputLabel htmlFor="food-type"
            className={classes.root}>Hoy many duckswhere fed?</InputLabel>  
      </Grid>
      <Grid item xs={8}>
          <ButtonGroup
            id="docks-count"
            color="primary"
            fullWidth
            onClick={(event) => { handleClick(event) }}
            className={classes.input}
          >
            <Button id="1" variant={ducksNumber===1?"contained":""}>One</Button>
            <Button id="2" variant={ducksNumber===2?"contained":""}>Two</Button>
            <Button id="3" variant={ducksNumber===3?"contained":""}>Three</Button>
            <Button id="4" variant={ducksNumber===4?"contained":""}>Four</Button>
            <Button id="5" variant={ducksNumber===5?"contained":""}>Five</Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={4}>
          <Title little text="Is this a recurrent fed?" />
          <Checkbox
            id="recurrent"
            checked={recurentFeed}
            color="primary"
            className={classes.checkbox}
            onChange={(event) => { handleChange(event) }}
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        </Grid>
      </>
      );
  }

      export default DucksSection;