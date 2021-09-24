import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},

  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  boxContainer: {
    marginBottom: theme.spacing(3)
  },
  preco: {
    marginTop: '15px',
  },
  title: {
    marginBottom: '35px',
  },
}))

export default useStyles