import { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  FormHelperText,
  Input
} from '@material-ui/core'

import { useDropzone } from 'react-dropzone'
import { DeleteForever, ErrorSharp } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'

import DefaultTemplate from '../../src/templates/Default'

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

const validationSchema = yup.object().shape({
  title: yup.string()
    .min(6, 'Escreva um título maior')
    .max(100, 'Título muito grande')
    .required('Campo obrigatório'),
  category: yup.string().required('Campo obrigatório'),
  description: yup.string()
    .min(50, 'Escreva uma descrição com pelo menos 50 caracteres.')
    .required('Campo obrigatório'),
  price: yup.number().required('Campo obrigatório'),
  email: yup.string().email('Digite um e-mail válido.').required('Campo Obrigatório'),
  name: yup.string()
    .min(3, 'Escreva um nome maior')
    .required('Campo obrigatório'),
  phone: yup.number().required('Campo obrigatório'),
  files: yup.array().min(1, 'Envie pelo menos uma foto').required('Campo obrigatório')
})

const Publish = () => {
  const classes = useStyles()

  return (
    <DefaultTemplate>
      <Formik
        initialValues={{
          title: '',
          category: '',
          description: '',
          price: '',
          email: '',
          name: '',
          phone: '',
          files: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('foi', values)
        }}
      >
        {
          ({
            touched,
            values,
            errors,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => {
            const { getRootProps, getInputProps } = useDropzone({
              accept: 'image/*',

              onDrop: (acceptedFile) => {

                const newFiles = acceptedFile.map(file => {
                  return Object.assign(file, {
                    preview: URL.createObjectURL(file)
                  })
                })

                setFieldValue('files', [
                  ...values.files,
                  ...newFiles,
                ])
              }
            })

            const handleRemoveFile = fileName => {
              const newFileState = values.files.filter(file => file.name !== fileName)
              setFieldValue('files', newFileState)
            }

            return (
              <form onSubmit={handleSubmit}>
                <Container maxWidth="sm" className={classes.title}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary">
                    Publicar Anúncio
                  </Typography>
                  <Typography component="h5" variant="h5" align="center" color="textPrimary">
                    Quanto mais detalhado, melhor !
                  </Typography>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.title && touched.title} fullWidth>
                      <InputLabel classname={classes.inputLabel}>
                        Título de Anúncio
                      </InputLabel>
                      <Input
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.title && touched.title ? errors.title : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.category && touched.category} fullWidth>
                      <InputLabel classname={classes.inputLabel}>
                        Categoria
                      </InputLabel>
                      <Select
                        name="category"
                        value={values.category}
                        fullWidth
                        onChange={handleChange}
                      >
                        <MenuItem value="Placa de Vídeo">Placa de Vídeo</MenuItem>
                        <MenuItem value="Teclado Mecânico">Teclado Mecânico</MenuItem>
                        <MenuItem value="X-Tudo">X-Tudo</MenuItem>
                      </Select>
                      <FormHelperText>
                        {errors.category && touched.category ? errors.category : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                      Imagens
                    </Typography>
                    <Typography component="div" variant="body2" align="left" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                      A primeira imagem é a foto de capa do anúncio.
                    </Typography>
                    {
                      errors.files && touched.files
                        ? <Typography variant="body2" color="error" gutterBottom>{errors.files}</Typography>
                        : null
                    }
                    <Box className={classes.thumbsContainer}>
                      <Box className={classes.dropzone} {...getRootProps()}>
                        <input name="files" {...getInputProps()} />
                        <Typography component="div" variant="body2" align="left" color={errors.files && touched.files ? 'error' : 'textPrimary'}>
                          Clique ou arraste para adicionar a imagem aqui.
                        </Typography>
                      </Box>

                      {
                        values.files.map((file, index) => (
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
                                <DeleteForever fontSize="large" />
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
                    <FormControl error={errors.description && touched.description} fullWidth>
                      <InputLabel classname={classes.inputLabel}>
                        Descreva os detalhes do item em venda.
                      </InputLabel>
                      <Input
                        name="description"
                        multiline
                        rows={6}
                        variant="outlined"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.description && touched.description ? errors.description : null}
                      </FormHelperText>
                    </FormControl>

                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <FormControl error={errors.price && touched.price} fullWidth>
                      <InputLabel classname={classes.inputLabel}>
                        Preço de Venda
                      </InputLabel>
                      <Input
                        name="price"
                        variant="outlined"
                        onChange={handleChange}
                        startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                      />
                      <FormHelperText>
                        {errors.price && touched.price ? errors.price : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box className={classes.box}>
                    <Typography component="h6" variant="h6" align="left" color="textPrimary">
                      Dados de Contato
                    </Typography>

                    <FormControl error={errors.name && touched.name} fullWidth>
                      <InputLabel className={classes.inputLabel}>Nome</InputLabel>
                      <Input
                        name="name"
                        variant="outlined"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.name && touched.name ? errors.name : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.email && touched.email} fullWidth>
                      <InputLabel className={classes.inputLabel}>
                        E-mail
                      </InputLabel>
                      <Input
                        name="email"
                        variant="outlined"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.email && touched.email ? errors.email : null}
                      </FormHelperText>
                    </FormControl>

                    <FormControl error={errors.phone && touched.phone} fullWidth>
                      <InputLabel className={classes.inputLabel}>
                        Telefone/Whats
                      </InputLabel>
                      <Input
                        name="phone"
                        variant="outlined"
                        onChange={handleChange}
                      />
                      <FormHelperText>
                        {errors.phone && touched.phone ? errors.phone : null}
                      </FormHelperText>
                    </FormControl>
                  </Box>
                </Container>

                <Container maxWidth="md" className={classes.boxContainer}>
                  <Box textAlign="right">
                    <Button type="submit" variant="contained" color="primary">
                      Publicar Anúncio
                    </Button>
                  </Box>
                </Container>
              </form>
            )
          }
        }
      </Formik>




    </DefaultTemplate>
  )
}

export default Publish