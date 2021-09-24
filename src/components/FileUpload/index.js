import {
  Box,
  IconButton,
  Typography,
} from '@material-ui/core'

import { DeleteForever } from '@material-ui/icons'
import { useDropzone } from 'react-dropzone'

import useStyles from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
  const classes = useStyles()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',

    onDrop: (acceptedFile) => {

      const newFiles = acceptedFile.map(file => {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      })

      setFieldValue('files', [
        ...files,
        ...newFiles,
      ])
    }
  })

  const handleRemoveFile = filePath => {
    const newFileState = files.filter(file => file.path !== filePath)
    setFieldValue('files', newFileState)
  }

  return (
    <>
      <Typography component="h6" variant="h6" color={errors && touched.files ? 'error' : 'textPrimary'}>
        Imagens
      </Typography>
      <Typography component="div" variant="body2" align="left" color={errors && touched.files ? 'error' : 'textPrimary'}>
        A primeira imagem é a foto de capa do anúncio.
      </Typography>
      {
        errors && touched.files
          ? <Typography variant="body2" color="error" gutterBottom>{errors}</Typography>
          : null
      }
      <Box className={classes.thumbsContainer}>
        <Box className={classes.dropzone} {...getRootProps()}>
          <input name="files" {...getInputProps()} />
          <Typography component="div" variant="body2" align="left" color={errors && touched.files ? 'error' : 'textPrimary'}>
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
                <IconButton color="secondary" onClick={() => handleRemoveFile(file.path)}>
                  <DeleteForever fontSize="large" />
                </IconButton>
              </Box>
            </Box>
          ))
        }
      </Box>
    </>
  )
}

export default FileUpload