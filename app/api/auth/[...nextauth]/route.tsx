import User from "@models/user";
import ConnectToDB from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";




const handler=NextAuth({
  providers:[
    GoogleProvider(
      {clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}
    ),
  ],


  callbacks:{
    async signIn({profile}){
      try{
        await ConnectToDB()
        const userExists=await User.findOne({email:profile.email})
        if (!userExists){
          await User.create({
            username:profile.name._id.replace(" ","").toLowerCase(),
            image:profile.picture,
            email:profile.email
          })
        }
      return true}catch(error){console.log(error); return false}
    },
    async session({session}){
      const lastName=await User.findOne({email:session.user.email})
      session.user.id=lastName.toString()
      return session
    }
  }
  
});

export {handler as GET,handler as POST}