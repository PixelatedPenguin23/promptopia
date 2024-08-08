'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


const PromptCard = (post) => {
  const [copied, setcopied] = useState('')
  const handleC=()=>{
    setcopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(()=>setcopied(''),3000)
  }
  return (
    <div className='flex flex-col gap-1'>
      <Image src={post.creator.image} height={30} width={30} alt='l'/>
      <p>{post.creator.uername}</p>
      <p>{post.creator.email}</p>
      <p>{post.prompt}</p>
      <p>{post.tag}</p>
      <div onClick={handleC}>
      <Image alt='k' width={15} height={15} src={copied===post.prompt?
        "public\assets\icons\tick.svg":"public\assets\icons\copy.svg"
      }/>
      </div>
    </div>
  )
}

export default PromptCard