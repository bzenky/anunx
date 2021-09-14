import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#efefef',
      mainImage: '#22223b',
      white: '#fff',
    }
  }
})

export default theme