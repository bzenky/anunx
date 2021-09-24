import { Formik } from 'formik'

import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  FormHelperText,
  Input
} from '@material-ui/core'

import useStyles from './styles'
import { initialValues, validationSchema } from './formValues'

import DefaultTemplate from '../../../src/templates/Default'
import FileUpload from '../../../src/components/FileUpload'

const Publish = () => {
  const classes = useStyles()

  return (
    <DefaultTemplate>
      <Formik
        initialValues={initialValues}
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
                    <FileUpload
                      files={values.files}
                      error={errors.files}
                      touched={touched.files}
                      setFieldValue={setFieldValue}
                    />
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