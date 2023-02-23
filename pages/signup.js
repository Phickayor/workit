import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Router from 'next/router'
function SignUp() {
    const emailValue = useRef(null)
    const pswdValue = useRef(null)
    const nameValue = useRef(null)
    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("")
    function HandleSubmit(e) {
        e.preventDefault()
        setEmail(emailValue.current.value)
        setPswd(pswdValue.current.value)
        setName(nameValue.current.value)
        fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, pswd, name })
        }).then(res => res.json()).then((data) => {
            if (data.message === "Sign up Successful") {
                alert("You now have an account with shopthrift. Click ok to Login")
                setError(data.message)
                Router.push({
                    pathname: "/login",
                    // query: { userAge, userHeight, userWeight, userGender }
                })
            }
            else {
                setError(data.message)
            }
        }).catch(error => console.error('Error:', error));
    }
    return (
        <div className='flex'>
            <div className='w-full h-screen lg:w-1/2 lg:flex flex-col overflow-y-auto'>
                {/* <img src={Logo} alt="Shop Thrift" className='lg:absolute sticky m-10 lg:top-0 text-3xl font-semibold font-serif text-slate-700' /> */}
                <div className='sticky top-0 backdrop-blur-lg'>
                    <h1 className=' px-10 py-10 text-5xl font-semibold text-slate-700 font-mono'>Work <i className="text-green-500">It!</i></h1>
                </div>
                <div className='container mx-auto lg:w-3/5 w-4/5'>
                    <h1 className='text-4xl font-semibold'>Sign Up</h1>
                    <p className='text-lg font-semibold mt-2 text-green-600 mb-10 font-mono'>Create an account with us today</p>
                    <form onSubmit={HandleSubmit} className='space-y-5'>
                        <h1 className='text-center bg-red-200 text-red-600'>{error}</h1>
                        <label className='font-semibold text-slate-800'>Name<i className='text-green-600 text-lg font-bold'>*</i></label>
                        <input ref={nameValue} className='rounded-xl block border w-full p-2' type="text" name="name" placeholder="Your Name" required />
                        <label className='block font-semibold text-slate-800'>Email<i className='text-green-600 text-lg font-bold'>*</i></label>
                        <input
                            ref={emailValue}
                            className='block rounded-xl border w-full p-2'
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                        />
                        <label className='block font-semibold text-slate-800'>Password<i className='text-green-600 text-lg font-bold'>*</i></label>
                        <input
                            ref={pswdValue}
                            className='block rounded-xl border w-full p-2'
                            type="password"
                            name="pswd"
                            placeholder="Input your password..."
                            required
                        />

                        <input type="checkbox" className='bg-green-600' />
                        <label className='font-semibold text-slate-700'>&nbsp; I agree to the</label>
                        <Link href="/termsAndConditions" className='text-green-600 font-semibold'>&nbsp; Terms & Conditions</Link>

                        <button className='rounded-xl text-center bg-green-500 text-white w-full mt-10 p-3 font-bold text-xl'>Create Account</button>
                    </form>
                    <div className='mt-10'>
                        <p className='text-md inline'>Already have an account?</p><Link href="/login" className='inline text-green-600 font-semibold'>&nbsp; Login</Link>
                    </div>
                </div>
            </div>
            <div className='hidden flex flex-col justify-center lg:block w-1/2 h-full flex flex-col justify-center container mx-auto bg-slate-900'>
                <img className='object-cover h-screen w-full opacity-70' src='/signupimage.webp' />
            </div>
        </div>



    )
}

export default SignUp