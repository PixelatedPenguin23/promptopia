'use client'

import Form from "@components/Form"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

const CreatePrompt = ()=>{

  const {data:session}=useSession()
  const router=useRouter()
  const [submitting, setIsSubmitting] = useState(false)
  const [post, setPost] = useState({
    prompt:"",tag:""
  })

  const createPrompt= async (e)=>{
    e.preventDefault()
    setIsSubmitting(true)
    try{
      const response=await fetch("/api/prompt/new",{
        method:"POST",
        body:JSON.stringify({
          prompt:post.prompt,
          userId:session?.user.id,
          tag:post.tag
        })
      })
    }catch(error){console.log(error)}
    finally{setIsSubmitting(false)}
  }

  return(
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  )
}