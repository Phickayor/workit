import React from 'react'

function SetProfile() {
    return (
        <div className='space-y-2 w-full' >
            <h1 className='text-slate-600 text-2xl font-semibold'>Edit Profile</h1>
            <form className='space-y-10 '>
                <div className="space-y-2">
                    <label className='text-slate-700 text-lg font-semibold'>Your Name*</label>
                    <div >
                        <input type="text" className='rounded-lg lg:w-2/5 border-2 focus:outline-none mr-4 py-2 px-4' placeholder="Olufikayomi Jetawo" />
                        <button className=' bg-slate-600 py-2 px-5 rounded-full text-white font-semibold text-lg hover:bg-green-600 duration-[1s]'>Change Name</button>
                    </div>
                </div>
                <div className="space-y-2 ">
                    <label className='text-slate-700 text-lg font-semibold'>Your Age*</label>
                    <div className="grid sm:grid-cols-3 grid-cols-2">
                        <div className="m-2">
                            <div className='bg-slate-600  h-32 text-4xl text-center rounded-lg text-white font-semibold hover:bg-green-600 duration-[1s] flex flex-col justify-center'>&lt;18</div>
                        </div>
                        <div className="m-2">
                            <div className='bg-slate-600  h-32 text-4xl text-center rounded-lg text-white font-semibold hover:bg-green-600 duration-[1s] flex flex-col justify-center'>18 -25</div>
                        </div>
                        <div className="m-2">
                            <div className='bg-slate-600 h-32 text-4xl text-center rounded-lg text-white font-semibold hover:bg-green-600 duration-[1s] flex flex-col justify-center'>26-35</div>
                        </div>
                        <div className="m-2">
                            <div className='bg-slate-600 h-32 text-4xl text-center rounded-lg text-white font-semibold hover:bg-green-600 duration-[1s] flex flex-col justify-center'>36-45</div>
                        </div>
                        <div className="m-2">
                            <div className='bg-slate-600 h-32 text-4xl text-center rounded-lg text-white font-semibold hover:bg-green-600 duration-[1s] flex flex-col justify-center'>&gt;45</div>
                        </div>
                    </div>
                    <div>
                        <label className='text-slate-700 text-xl mt-10 font-semibold'>Your Gender*</label>
                        <div className='flex mt-5 mx-10 justify-around text-slate-700 text-xl font-semibold'>
                            <div>
                                <input type="radio" name="gender" value="male" />&nbsp;Male
                            </div>
                            <div>
                                <input type="radio" name="gender" value="female" />&nbsp;Female
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 md:space-y-0 space-y-4 '>
                    <div className="space-y-2 ">
                        <label className='text-slate-700 text-lg font-semibold'>Your Weight (kg)*</label>
                        <div className='w-full flex justify-around'>
                            <input type="text" className='rounded-lg lg:w-2/5 border-2 focus:outline-none mr-4 py-2 px-4' placeholder="Weight in (kg)...." />
                            <button className=' bg-slate-600 py-2 px-5 rounded-full text-white font-semibold text-lg hover:bg-green-600 duration-[1s]'>Set Weight</button>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className='text-slate-700 text-lg font-semibold'>Your Height (kg)*</label>
                        <div className='w-full  flex justify-around' >
                            <input type="text" className='rounded-lg lg:w-2/5 border-2 focus:outline-none mr-4 py-2 px-4' placeholder="Height in (cm)...." />
                            <button className='bg-slate-600 py-2 px-5  rounded-full text-white font-semibold text-lg hover:bg-green-600 duration-[1s]'>Set Height</button>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SetProfile