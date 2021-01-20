import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  infoBox: {
    width: '30%',
    textAlign: 'center',
    cursor: 'pointer'
  },
  info: {
    fontWeight: 600,
    fontSize: '1.75rem',
    marginBottom: '0.5rem'
  },
  cases: {
    color: '#fb4443',
  },
  recovered: {
    color: '#7dd71d',
  },
  deaths: {
    color: '#cc1034',
  },
})

export default useStyles;