'use client'

import Form from "@components/Form"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function cPrompt(){
  const [posts, setPosts] = useState({
    prompt: "",tag: ""
  })
  const {data:session}=useSession()
  const router=useRouter()
  const [submitting, setsubmitting] = useState(false)

  const createP=async(e)=>{
    e.preventDefault()
    setsubmitting(true)
    try{
      const response=await fetch('api/prompt/new',{
        method:'POST',
        body:JSON.stringify({
          prompt:posts.prompt,
          tag:posts.tag,
          userId:session?.user.id
        })
      })
      if (response.ok){router.push('/')}

    }catch(error){console.log(error)}
    finally{setsubmitting(false)}
  }

  return(
    <Form
    type='Create'
    handleSubmit={createP}
    submitting={submitting}
    posts={posts}
    setPosts={setPosts}/>
  )
}