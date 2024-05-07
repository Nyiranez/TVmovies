import React from 'react'
import image1 from '../assets/images/Capture.png'
import { FaYoutubeSquare } from "react-icons/fa";
export const Home1 = () => {
    return (
        <div>
            <div className='flex flex-row justify-around items-center mt-24'>
                <div className='space-y-8 flex flex-col items-center'>
                    <div>
                    <h1 className='text-white'>FIND MOVIES</h1>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">TV SHOW AND MORE</h1>
                    </div>
   
                    <div>
                        <p className='text-white'>Lorem ipsum has been the industry's standard dummy text</p>
                        <p className='text-white'> ever since the 1500s,when an unknown printer took a galley</p>
                        <p className='text-white'>of type and scrambled it to make a type speceman book</p>

                    </div>

                    <div className='text-white flex flex-row border-2 border-white px-4 py-2 space-x-8' >
                        <FaYoutubeSquare />
                        <p className='text-white'>Watch tutorial</p>
                    </div>
                </div>
                <div>
                    <img src={image1} alt="" className='h-96 relative'></img>
                    <img src={image1} alt="" className='h-96 -mt-64 right-96 absolute'></img>
                </div>
            </div>

        </div>
    )
}
