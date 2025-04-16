import React from 'react'

const SignUp = () => {
  return (
    <div className="bg-gradient-to-r from-[#9536E5] to-[#3B7BCE] text-white px-16 py-16">
        <div className="container grid grid-cols-2 gap-10 items-center">
           
              
                <h3 className='text-4xl font-bold w-96'>  Sign Up To Get The
                Latest Digital Trends</h3>
                <div className=" h-20 border flex items-center p-1 justify-between">
                    <input type="text" placeholder='Enter your email' className='px-4 flex-1 border-none outline-none' />
                    <button className='h-full bg-[#007aff] w-40 flex justify-center text-lg font-bold uppercase items-center text-white'>
                        SIgn up
                    </button>
               
                
            </div>
          
        </div>
   
  </div>
  )
}

export default SignUp
