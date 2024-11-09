import React from 'react'

export default function ListCard() {
    return (
        <div className='container w-4/5 justify-between m-auto my-10 p-5 rounded-sm'>
            <h1 className='text-xl '>List Card</h1>
            <div className="listwraper ">
                <div className="cardwrapper flex justify-center items-center gap-5">
                    <div className="listcard bg-gray-800 p-4 my-3 rounded-sm shadow cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime, perferendis, libero laborum sit harum corporis autem asperiores magni ipsa facilis dolor nemo.
                    </div>
                    <button className='deletebtn cursor-pointer bg-red-600 p-3 rounded-sm text-center font-bold hover:bg-red-900'>
                        Delete
                    </button>
                </div>

                <div className="cardwrapper flex justify-center items-center gap-5">
                    <div className="listcard bg-gray-800 p-4 my-3 rounded-sm shadow cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime, perferendis, libero laborum sit harum corporis autem asperiores magni ipsa facilis dolor nemo.
                    </div>
                    <button className='deletebtn cursor-pointer bg-red-600 p-3 rounded-sm text-center font-bold hover:bg-red-900'>
                        Delete
                    </button>
                </div>

                <div className="cardwrapper flex justify-center items-center gap-5">
                    <div className="listcard bg-gray-800 p-4 my-3 rounded-sm shadow cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maxime, perferendis, libero laborum sit harum corporis autem asperiores magni ipsa facilis dolor nemo.
                    </div>
                    <button className='deletebtn cursor-pointer bg-red-600 p-3 rounded-sm text-center font-bold hover:bg-red-900'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
