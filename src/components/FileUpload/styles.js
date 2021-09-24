import { makeStyles } from '@material-ui/core/styles'

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
  dropzone: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 200,
    height: 150,
    padding: 10,
    margin: '0 0 15px 0',
    backgroundColor: theme.palette.background.default,
    border: '2px dashed #333333'
  },
  preco: {
    marginTop: '15px',
  },
  title: {
    marginBottom: '35px',
  },
  thumb: {
    position: 'relative',
    width: 200,
    height: 150,
    margin: '0 15px 15px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',

    '& $mainImage': {
      position: 'absolute',
      backgroundColor: theme.palette.background.mainImage,
      bottom: 0,
      left: 0,
      padding: '6px 10px',
    },

    '&:hover $mask': {
      display: 'flex',
    },

    '& $mask': {
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,.6)',
      width: '100%',
      height: '100%',
    }
  },
  thumbsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '15px'
  },
  inputLabel: {
    fontWeight: 400,
    color: theme.palette.primary.main,
  }
}))

export default useStyles