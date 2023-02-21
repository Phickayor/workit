import Navbar from '@/components/Navbar'
import React from 'react'
import CurrentProfile from '@/components/CurrentProfile'

function profile() {
    return (
        <div>
            <Navbar />
            <div className='mx-10'>
                <h1 className=' mt-10 text-slate-700 text-5xl font-semibold'>Your Profile</h1>
                <p className='text-xl mt-2 font-semibold text-green-600 font-sans'>Set up your profile for better experience</p>
            </div>
            <div className="flex my-10 mx-auto w-10/12">
                <div className='lg:w-2/5 w-full lg:border-r-2 px-4'>
                    <CurrentProfile />
                </div>
            </div>
        </div>
    )
}

export default profile