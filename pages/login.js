import React, { useState, useRef } from 'react'
import Router from 'next/router'
import Link from 'next/link'
// import Image from 'next/image'  ]
function Login() {
    const emailValue = useRef(null)
    const pswdValue = useRef(null)
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [error, setError] = useState("")
    function HandleSubmit(e) {
        e.preventDefault()
        setEmail(emailValue.current.value)
        setPswd(pswdValue.current.value)
        fetch("http://localhost:8080/signIn", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, pswd })
        }).then(res => res.json()).then((data) => {
            if (data.message === "Login Successful") {
                Router.push({
                    pathname: "/",
                    // query: { userAge, userHeight, userWeight, userGender }
                })
                setError(data.message)
            }
            else {
                setError(data.message)
            }
        }).catch(error => console.error('Error:', error));
    }
    return (
        <div className='flex'>
            <div className='w-full h-screen lg:w-1/2 flex flex-col overflow-y-auto'>
                {/* <img src={Logo} alt="Shop Thrift" className='absolute m-10 text-3xl font-semibold font-serif text-slate-700' /> */}
                <div className=' sticky top-0 backdrop-blur-lg'>
                    <h1 className=' px-10 py-10 text-5xl font-semibold text-slate-700 font-mono'>Work <i className="text-green-500">It!</i></h1>
                </div>
                <div className='container mx-auto lg:w-3/5 w-4/5'>
                    <h1 className='text-4xl font-semibold'>Login</h1>
                    <p className='text-lg font-semibold mt-2 text-green-600 mb-10 font-mono'>Welcome back we are glad to see you again</p>
                    <form onClick={HandleSubmit} className='space-y-5'>
                        <h1 className='text-center bg-red-200 text-red-600'>{error}</h1>
                        <label className='font-semibold text-slate-800'>Email<i className='text-green-600 text-lg font-bold'>*</i></label>
                        <input
                            className='rounded-xl block border w-full p-2'
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            ref={emailValue}
                            required
                        />
                        <label className='block font-semibold text-slate-800'>Password<i className='text-green-600 text-lg font-bold'>*</i></label>
                        <input
                            className='block rounded-xl border w-full p-2'
                            type="password"
                            name="pswd"
                            placeholder="Input your password..."
                            ref={pswdValue}
                            required
                        />
                        <div className='flex w-full font-semibold'>
                            <div className='w-8/12'>
                                <input type="checkbox" className='bg-green-600' />
                                <label className=' text-slate-700'>&nbsp; Remember me</label>
                            </div>
                            <Link href="/forgetpassword" className='inline-block w-4/12 text-center text-green-600'>Forgot password?</Link>
                        </div>
                        <button className='rounded-xl text-center bg-green-500 text-white w-full mt-10 p-3 font-bold text-xl'>Login</button>
                        <div className='mt-10'>
                            <p className='text-md inline'>Dont have an account?</p><Link href="/signup" className='inline text-green-600 font-semibold'>&nbsp; Create account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden lg:block w-1/2 h-full flex flex-col justify-center container mx-auto bg-slate-900'>
                <img className='object-cover h-screen w-full opacity-70' src="https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg?auto=compress&cs=tinysrgb&w=2000" />
            </div>
        </div>
    )
}

export default Login