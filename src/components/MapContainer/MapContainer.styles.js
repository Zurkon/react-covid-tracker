import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '500px',
    backgroundColor: '#777',
    padding: '1rem',
    borderRadius: '5px',
    marginTop: '1rem',
    marginBottom: '1rem',
    boxShadow: '0 0 8px -4px rgba(0, 0, 0, 0.5)',
    "& #mapContainer": {
      height: '100%',
      borderRadius: '5px',
    }
  }
});

export default useStyles;