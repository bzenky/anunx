import dbConnect from '../../src/utils/dbConnect'
import UsersModel from '../../src/models/users'
import { crypto } from '../../src/utils/password'

const users = async (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({ sucess: true })
      break

    case 'POST':
      // pegar os dados no req
      const {
        name,
        email,
        password,
      } = req.body

      await dbConnect()

      const passwordCrypto = await crypto(password)

      const user = new UsersModel({
        name,
        email,
        password: passwordCrypto,
      })

      user.save()

      res.status(200).json({ success: true })

    // conectar no banco
    // criptografar senha
    // salvar os dados
    // responder sucesso
  }
}

export default users