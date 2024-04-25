import User from "~/server/models/UserModel"
import bcrypt from 'bcrypt'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if(!body.email || !body.name || !body.password ){
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      message: 'Missing Required Fields'
    })
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(body.password, salt)
  const user = await User.create({...body, password: hashedPassword})
  return { ...user.toObject(), password: undefined }
})
