import { makeStyles } from '@material-ui/styles/'

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  container: {
    marginBottom: 30,
  },
  formControl: {
    marginBottom: theme.spacing(1),
  },
  inputLabel: {
    margin: '2px 0 3px'
  },
  submit: {
    margin: theme.spacing(4, 0, 1)
  }
}))

export default useStyles