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
    (async ()=>{
      const res=await getProviders()
      setProviders(res)
    })()
  },[])


  return (
    <nav className='bg-blue-800 flex fixed top-0 w-full overflow-hidden h-16 flex-row justify-between items-center'>
      <Link href='/' className='m-2 p-2'>
        <Image
        src='assets/images/logo.svg'
        height={34}
        width={34}
        alt='logo'/>
      </Link>

      {providers &&
      Object.values(providers).map((provider)=>(
      <button className='bg-orange-600 rounded-xl p-1 h-9 w-20 mx-2 font-mono hover:bg-black hover:text-white transition-all'
      type='button'
      onClick={()=>{signIn(provider.id)}}
      key={provider.name}>
        Sign in
      </button>
      ))}
      

    </nav>
  )
}

export default Nav