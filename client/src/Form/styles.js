import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      textAlign: 'center',
    },
    textField: {
      textAlign: 'left',
    },
    label: {
      textAlign: 'left',
    },
    input: {
      height: 50,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    inputText: {
      height: 50,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '100%',
    },
    submit: {
      height: 50,
    },
    formControl: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      minWidth: 120,
    },
  }));

export { useStyles };