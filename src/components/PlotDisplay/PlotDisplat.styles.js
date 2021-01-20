import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: '150px',
  },
  flag: {
    height: '100px',
    width: '100%',
    backgroundSize: 'cover',
    borderRadius: '8px',
  },
  name: {
    marginTop: '5px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#555'
  },
  info: {
    fontSize: '0.8rem',
    marginTop: '5px'
  }
});

export default useStyles;