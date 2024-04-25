import { NuxtAuthHandler } from "#auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import User from "~/server/models/UserModel"
export default NuxtAuthHandler({

  secret: useRuntimeConfig().authSecret,
  providers: [
    //@ts-expect-error
    CredentialsProvider.default({
      name: 'credentials',
      credentials:{},
      async authorize( credentials:{ email: String, password: String }){
        const user = User.findOne({ email : credentials.email })
        return {}
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