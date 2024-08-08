'use client'

import Form from "@components/Form"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import PromptCard from "./PromptCard"

const Prompt=(data)=>{
  return(
    <div>
      {data.map((post)=>(
        <PromptCard
        key={post._id}
        post={post}
        />
      ))}
    </div>
  )
}

export default function Feed(){

  const [posts, setposts] = useState([])
  useEffect(()=>{
    async()=>{
      const fet=await fetch('/api/prompt')
      const data=await fet.json()
      setposts(data)
    }
  },[])

  return(
   <div className="flex flex-col items-center gap-3"> 
    <input className="text-black"/>
    <Prompt
    data={posts}
    />
  </div>
    
  )
}