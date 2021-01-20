import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2rem'
  },
  dropdown: {
    minWidth: '120px'
  }
});

export default useStyles;