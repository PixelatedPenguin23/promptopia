import Prompt from "@models/prompt"
import ConnectToDB from "@utils/database"

export const POST=async (request)=>{
  const {prompt,tag,userId}=await request.json()
  try{
    await ConnectToDB()
    const newPrompt=new Prompt({creator:userId,prompt,tag})
    await newPrompt.save()
    return new Response(JSON.stringify(newPrompt),{status:201})
    
  }catch(error){return new Response("failed",{status:500})}
}