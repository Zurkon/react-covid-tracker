import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  table: {
    // overflowY: 'scroll',
    // overflow: 'hidden',
    height: '320px',
    paddingRight: '11px',
    '& span': {
      paddingRight: '12px'
    }
  }
});

export default useStyles;