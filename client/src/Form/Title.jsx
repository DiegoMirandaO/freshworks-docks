import { Typography, } from '@material-ui/core';
import { useStyles } from './styles';

function Title(props) {
    const { text, header=false, little=false } = props;
    const classes = useStyles();
    return (
        <Typography variant={header?'h2': little ? 'bod2' : 'h5'} className={header?classes.header:(little?classes.text:classes.textField)}>
          {text}
        </Typography>
    );
  }

export default Title;