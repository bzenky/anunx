import { Box, Button, Container, Select, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import DefaultTemplate from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  box: {
    backgroundColor: theme.palette.background.white,
    padding: theme.spacing(3),
  },
  boxContainer: {
    marginBottom: theme.spacing(3)
  },
  textField: {
    margin: theme.spacing(1, 0, 3),
  },
}))

const Publish = () => {
  const classes = useStyles()

  return (
      <DefaultTemplate>
        <Container maxWidth="sm" className={classes.container}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            Publicar Anúncio
          </Typography>
          <Typography component="h5" variant="h5" align="center" color="textPrimary">
            Quanto mais detalhado, melhor !
          </Typography>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6" align="left" color="textPrimary">
              Título de Anúncio
            </Typography>
            <TextField
              label="Ex.: Computador Gamer i7"
              size="small"
              fullWidth
              className={classes.textField}
            >
            </TextField>

            <Select
              native
              value=""
              fullWidth
              onChange={() => {}}
              inputProps={{
                name: 'age',
              }}
            >
             <option value="">Selecione</option> 
             <option value={1}>Placa de Vídeo</option> 
             <option value={2}>Teclado Mecânico</option> 
             <option value={3}>X-Tudo</option> 
            </Select>
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6" align="left" color="textPrimary">
              Imagens
            </Typography>
            <Typography component="div" variant="body2" align="left" color="textPrimary">
              A primeira imagem é a foto de capa do anúncio.
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6" align="left" color="textPrimary">
              Descrição
            </Typography>
            <Typography component="div" variant="body2" align="left" color="textPrimary">
              Descreva os detalhes do item em venda.
            </Typography>
            <TextField
              multiline
              rows={6}
              variant="outlined"
              fullWidth
            />
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box className={classes.box}>
            <Typography component="h6" variant="h6" align="left" color="textPrimary">
              Dados de Contato
            </Typography>
            
            <TextField
              label="Nome"
              size="small"
              variant="outlined"
              fullWidth
              className={classes.textField}
            />
            <TextField
              label="E-mail"
              size="small"
              variant="outlined"
              fullWidth
              className={classes.textField}
            />
            <TextField
              label="Telefone/Whats"
              size="small"
              variant="outlined"
              fullWidth
              className={classes.textField}
            />
          </Box>
        </Container>

        <Container maxWidth="md" className={classes.boxContainer}>
          <Box textAlign="right">
            <Button variant="contained" color="primary">
              Publicar Anúncio
            </Button>
          </Box>
        </Container>
      </DefaultTemplate>
  )
}

export default Publish