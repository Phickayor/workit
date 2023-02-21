import React from 'react'

function CurrentProfile() {
    return (
        <div className='space-y-10 lg:space-y-20 w-full'>
            <h1 className='text-slate-600 text-2xl font-semibold'>Current Profile</h1>
            <div className='space-y-10'>
                <div className='flex justify-between'>
                    <label className='text-black text-md font-semibold'>Name </label>
                    <p className='font-bold text-slate-600'>Jetawo Olufikayomi</p>
                </div>
                <div className='flex justify-between'>
                    <label className='text-black text-md font-semibold'>Age </label>
                    <p className='font-bold text-slate-600'>Not Set</p>
                </div>
                <div className='flex justify-between'>
                    <label className='text-black text-md font-semibold'>Weight </label>
                    <p className='font-bold text-slate-600'>Not Set</p>
                </div>
                <div className='flex justify-between'>
                    <label className='text-black text-md font-semibold'>Height </label>
                    <p className='font-bold text-slate-600'>Not Set</p>
                </div>
                <div className='flex justify-between'>
                    <label className='text-black text-md font-semibold'>Special Health Condition </label>
                    <p className='font-bold text-slate-600'>None</p>
                </div>

            </div>
        </div>
    )
}

export default CurrentProfile