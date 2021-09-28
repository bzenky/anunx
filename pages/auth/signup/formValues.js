import * as yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
}

const validationSchema = yup.object().shape({
  name: yup.string()
    .min(3, 'Escreva um nome maior')
    .required('Campo obrigatório'),
  email: yup.string()
    .email('Digite um e-mail válido.')
    .required('Campo Obrigatório'),
  password: yup.string()
    .required('Campo Obrigatório')
    .min(5, 'Escreva uma senha maior'),
  passwordConf: yup.string()
    .required('Campo Obrigatório')
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),
})

export {
  initialValues,
  validationSchema,
}


