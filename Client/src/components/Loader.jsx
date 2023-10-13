import React from 'react'
import ReactLoading from 'react-loading'

const Loader = () => {
    return (
        <div className='w-screen h-screen bg-white fixed left-0 right-0 top-0 bottom-0 z-[1000] flex flex-col justify-center items-center gap-2 overflow-hidden'>
            <p className='text-sm text-custom-blue w-fit mx-auto'>Loading, please wait...</p>
            <ReactLoading type="spin" className='w-[150px] h-[150px]' color='#113885' /> 
        </div>
    )
}

export default Loader
