import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Work It !</title>
        <meta name="description" content="Stay healthy and fit, health is wealth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex'>
        <div className='hidden lg:block w-1/2 h-full flex flex-col justify-center container mx-auto bg-[#192026]'>
          <img
            className='object-cover h-screen w-full opacity-70'
            src="https://images.pexels.com/photos/7869678/pexels-photo-7869678.jpeg?auto=compress&cs=tinysrgb&w=2000"
          />
        </div>

        <div className='w-full h-screen lg:w-1/2 flex flex-col justify-center text-center overflow-y-auto'>
          <div className='absolute top-0 backdrop-blur-lg'>
            <h1 className=' px-10 py-10 text-5xl font-semibold text-slate-700 font-mono'>Work <i className="text-green-500">It!</i></h1>
          </div>
          <h1 className='text-5xl leading-[60px]'><b className='text-green-600 font-semibold'>Health</b> is wealth <br /> Put in more <b className=' font-semibold text-green-600'>Effort</b> </h1>
          <p className='text-lg lg:text-xl m-4 text-slate-600 font-serif'>Take care of your body, it is the only place we have to live</p>
          <Link href="/login" className=' mt-10 bg-slate-600 w-10/12 lg:w-8/12 self-center p-5 rounded-full text-white font-semibold text-xl hover:bg-green-600 duration-[2s]'>Get Started</Link>
        </div>

      </div>
    </>
  )
}
