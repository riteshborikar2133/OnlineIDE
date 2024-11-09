import React from 'react'
import Navbar from '../components/Navbar'
import ListCard from '../components/ListCard'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container w-3/4 flex justify-between m-auto my-10">
        <div className="username  p-2 ">
          <p className='text-xl font-mono'>
            Hii, Ritesh
          </p>
        </div>
        <div className="searchbox flex justify-center gap-2 items-center">
          <input type="text" name="" id="" placeholder='Search'
            className=' block w-full px-3 py-2 bg-gray-950 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-black focus:bg-white'
          />
          <button className='bg-blue-200 px-3 py-1 font-bold rounded-sm text-center text-black'>+</button>
        </div>
      </div>
      <div className="homecontainer">
        <ListCard />
      </div>
    </>
  )
}
