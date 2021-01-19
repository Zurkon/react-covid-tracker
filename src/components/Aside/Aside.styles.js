import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: darkMode => darkMode ? '#303030' : '#f5f5f5'
  }
});

export default useStyles;