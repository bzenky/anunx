import TemplateDefault from '../../src/templates/Default'

import Card from '../../src/components/Card'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Container, Grid, IconButton, InputBase, Paper, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/search'

const useStyles = makeStyles((theme) => ({
  searchBox: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
  },
  filterBox: {
    marginTop: '25px',
    padding: theme.spacing(3, 2),
    background: '#fff',
  },
  info: {
    margin: '20px 0',
    padding: theme.spacing(3, 2),
    background: '#fff',
  },
  filteredItems: {
    marginTop: '5px',
  }
}))

const List = () => {
  const classes = useStyles()

  return (
    <TemplateDefault>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <Paper className={classes.searchBox}>
              <InputBase
                placeholder="Ex. GTX 2080 TI"
                fullWidth
              />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid item xs={12} sm={12} md={12}>
          <Box className={classes.info}>
            <Typography component="h6" variant="h6">
              Anúncios
            </Typography>
            <Typography component="span" variant="subtitle2">
              FORAM ENCONTRADOS 200 ANÚNCIOS
            </Typography>

            <Grid container spacing={4} className={classes.filteredItems}>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random?1'}
                  title={'Produto 1'}
                  subtitle={'R$ 77,77'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random?1'}
                  title={'Produto 1'}
                  subtitle={'R$ 77,77'}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card
                  image={'https://source.unsplash.com/random?1'}
                  title={'Produto 1'}
                  subtitle={'R$ 77,77'}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </TemplateDefault >
  )
}

export default List