import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    marginTop: '20px',
    marginBottom: '20px',
    overflowY: 'scroll',
    height: '400px',
    '& span': {
      paddingRight: '12px'
    }
  }
});

export default useStyles;