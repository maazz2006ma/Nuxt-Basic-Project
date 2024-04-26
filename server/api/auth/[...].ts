import { NuxtAuthHandler } from "#auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import User from "~/server/models/UserModel"
import bcrypt from 'bcrypt'
export default NuxtAuthHandler({

  secret: useRuntimeConfig().authSecret,
  providers: [
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {},
      async authorize( credentials: { email: string, password: string }){
        const user = await User.findOne({ email : credentials.email })
        if(!user){
          throw createError({
            statusCode: 401,
            statusMessage: "Unauthorized User",
          })
        }
        const isValid = await bcrypt.compare(credentials.password, user.password)
        if(!isValid){
          throw createError({
            statusCode: 401,
            statusMessage: "Invalid Credentials"
          })
        }
        return {
          ...user.toObject(),
          password: undefined
        }
      }
    })
  ],
  pages:{
    signIn: "/login",
  },
  session:{
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({token, user, account}){
      if (user){
        token = {
          ...token,
          ...user
        }
      }
      return token
    },
    async session({session, token}){
      session.user = {
       ...session,
       ...token 
      }
      return session
    }
  }
})