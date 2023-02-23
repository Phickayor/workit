import Navbar from '@/components/Navbar'
import React from 'react'
import CurrentProfile from '@/components/CurrentProfile'
import SetProfile from '@/components/SetProfile'

function profile() {
    return (
        <div className='w-full'>
            <Navbar />
            <div className='mx-10'>
                <h1 className=' mt-10 text-slate-700 text-5xl font-semibold'>Your Profile</h1>
                <p className='text-xl mt-2 font-semibold text-green-600 font-sans'>Set up your profile for better experience</p>
            </div>
            <div className="flex flex-col lg:flex-row  my-10 mx-auto w-10/12 space-y-20 lg:space-y-0">
                <div className='lg:w-2/5 w-full lg:border-r-2 lg:px-8'>
                    <CurrentProfile />
                </div>
                <div className='lg:w-3/5 w-full lg:px-8'>
                    < SetProfile />
                </div>
            </div>
        </div>
    )
}

export default profile