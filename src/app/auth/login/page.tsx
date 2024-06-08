"use client"
import React from 'react'
import { useSession, signIn } from 'next-auth/react'
import Image from "next/image";

const Login = () => {
  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center bg-white'>
      <div className='font-bold text-2xl text-gray-700 h-14 flex items-center w-full shadow-md pl-7'>
        <div className='flex items-end'>
          <p className='text-3xl'>≡</p>
          <p>mail.ai</p>
        </div>
      </div>
      <div className='h-full flex justify-center items-center' >
        <div className='border flex flex-col gap-8 border-gray-400 items-center p-4 rounded-xl shadow-md'>
          <h1 className="text-lg font-bold leading-tight tracking-tight text-gray-700">
            Sign in to your account
          </h1>
          <Image src="/logo2.png" alt="logo" width={150} height={40} />
          <button type='button' onClick={() => signIn("google")} className="flex items-center justify-center w-48 h-8 px-4 mb-4 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50">
            <Image src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" width={15} height={10} className="mr-2" />
            <span className="text-gray-800 font-medium text-sm ">Sign in with Google</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login