'use client'
import { getProviders, useSession,signIn,signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Nav = () => {
  const {data:session}=useSession()
  const [toggle,setToggle]=useState(false)
  const [providers,setProviders]=useState(null)

  
  useEffect(()=>{
    (async()=>{
      const res=getProviders()
      setProviders(res)
    })(),[]
  })

  const lg=true


  return (
    <nav className=' flex fixed top-0 w-full  h-16 flex-row justify-between items-center md:px-10'>
      <Link href='/' className='m-2 p-2 flex flex-row items-center'>
        <Image
        src='assets/images/logo.svg'
        height={34}
        width={34}
        alt='logo'/>
        <span className='text-white mx-1 text-sm md:flex hidden'>Promptoopia</span>
      </Link>

      
      
      {/**desktop XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */}

      {lg ?(
      <div className='mx-2 flex-row text-center items-center justify-between md:flex hidden'>
        <Link href='/create' className='h-8 flex flex-col items-center justify-center bg-orange-600 rounded-xl text-lg w-32 mx-1 font-mono hover:bg-black
         hover:text-white transition-all '>
        Create Post
        </Link>
        <button className='h-8 flex flex-col items-center justify-center bg-orange-600 rounded-xl text-lg w-32 mx-1 font-mono hover:bg-black
         hover:text-white transition-all '
        onClick={()=>{signOut()}}>
          Sign Out
        </button>
        <Link href='/profile'>
        <Image className='rounded-full mx-1 hover:opacity-35 transition-all'
        onClick={()=>{setToggle(!toggle)}}
        src={'assets/images/logo.svg'}
        width={30}
        height={30}
        alt='Profile'/>
        </Link>
      </div>):
      (
      <div className='max-md:hidden'>
        {providers &&
      Object.values(providers).map((provider)=>(
      <button className='h-8 flex flex-col items-center justify-center bg-orange-600 rounded-xl text-lg w-32 mx-1 font-mono hover:bg-black
         hover:text-white transition-all '
      type='button'
      onClick={()=>{signIn(provider.id)}}
      key={provider.name}>
        Sign in
      </button>
      ))}
      </div>)}

      {/**pHONE XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/}
      
      {lg ?(
      <div className='mx-2 flex-row text-center items-center justify-between max-md:flex hidden'>
        <Image className='rounded-full mx-1 hover:opacity-35 transition-all'
        onClick={()=>{setToggle(!toggle)}}
        src={'assets/images/logo.svg'}
        width={30}
        height={30}
        alt='Profile'/>
      </div>):
      (
      <div className='md:hidden'>
        {providers &&
      Object.values(providers).map((provider)=>(
      <button className='h-8 flex flex-col items-center justify-center bg-orange-600 rounded-xl text-lg w-32 mx-1 font-mono hover:bg-black
         hover:text-white transition-all '
      type='button'
      onClick={()=>{signIn(provider.id)}}
      key={provider.name}>
        Sign in
      </button>
      ))}
      </div>)
      
      }
      {/**sssssssssssssssssssssssss */}
      {
        toggle &&
        <div className='absolute flex flex-col top-16 right-16 min-w-fit w-20 h-26 m-auto  min-h-fit text-center md:hidden rounded-lg bg-orange-600 text-black p-3 '>
          
          <Link href='/profile'>
          Profile
          </Link>
          <Link href='/create'>
          Create Post
          </Link>
          <button>
            Sign Out
          </button>
        </div>
      }

      

    </nav>
  )
}

export default Nav