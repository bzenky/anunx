import { useState } from 'react'

import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Select,
  OutlinedInput,
  TextField,
  Typography } from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { DeleteForever } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

import DefaultTemplate from '../../src/templates/Default'

const useStyles = makeStyles((theme) => ({
  mask: {},
  mainImage: {},

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
  textField: {
    margin: theme.spacing(1, 0, 3),
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
}))

const Publish = () => {
  const classes = useStyles()
  const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',

    onDrop: (acceptedFile) => {

      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFiles([
        ...files,
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = fileName => {
    const newFileState = files.filter(file => file.name !== fileName)
    setFiles(newFileState)
  }

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
            <Typography component="h6" variant="h6" color="textPrimary">
              Imagens
            </Typography>
            <Typography component="div" variant="body2" align="left" color="textPrimary">
              A primeira imagem é a foto de capa do anúncio.
            </Typography>
            <Box className={classes.thumbsContainer}>
              <Box className={classes.dropzone} {...getRootProps()}>
                <input {...getInputProps()}/>
                <Typography component="div" variant="body2" align="left" color="textPrimary">
                  Clique ou arraste para adicionar a imagem aqui.
                </Typography>
              </Box>

              {
                files.map((file, index) => (
                  <Box
                  key={file.name} 
                  className={classes.thumb}
                  style={{ backgroundImage: `url(${file.preview})` }}
                >
                  {
                    index === 0 ?
                      <Box className={classes.mainImage}>
                        <Typography variant="body" align="left" color="secondary">
                          Principal
                        </Typography>
                      </Box>
                    : null
                  }
                  
                  <Box className={classes.mask}>
                    <IconButton color="secondary" onClick={() => handleRemoveFile(file.name)}>
                      <DeleteForever fontSize="large"/>
                    </IconButton>
                  </Box>
                </Box>
                ))
              }

            </Box>
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
              Preço
            </Typography>
            <FormControl fullWidth variant="outlined" className={classes.preco}>
              <InputLabel>Valor</InputLabel>
              <OutlinedInput
                onChange={() => {}}
                startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                labelWidth={40}
              />
            </FormControl>
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