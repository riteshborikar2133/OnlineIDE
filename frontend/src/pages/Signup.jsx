import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <>
            <div className="container w-screen min-h-screen flex items-center justify-center px-{100px} ">
                <div className="left w-1/3 ">
                    <div className="flex min-h-full  flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                        <div className="logo flex items-baseline gap-3 justify-center">
                            <h1 className='font-serif text-3xl font-bold text-cyan-600'>COIDE</h1>
                            <h2 className='font-serif text-lg'>ONLINE IDE</h2>
                        </div>
                        <div className="inputform  ">
                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-100">
                                            User Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="username"
                                                name="username"
                                                type="text"
                                                required
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 px-2"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-100 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 px-2"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                                                Password
                                            </label>
                                            <div className="text-sm">
                                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                required
                                                autoComplete="current-password"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                    <div>
                                        <div className="text-sm">
                                            <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Already have account?
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right w-2/3 bg-black min-h-screen flex items-center">
                    <img src="./signup.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
