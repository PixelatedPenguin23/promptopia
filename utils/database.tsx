import mongoose from "mongoose";

let isConnected=false
export default async function ConnectToDB(){
  mongoose.set('strictQuery',true)
  if(isConnected){console.log("already connected")}
  try{
    await mongoose.connect(process.env.MONGODB_URI,{
      dbName:'users',
      useUnifiedTopology:true,
      useNewUrlParser:true
    })
    isConnected=true
    console.log('MongoDB connected')
  } 
  catch(error){console.log(error);isConnected=false}

}