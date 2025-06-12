import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler=(event)=>{
        event.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className="text-2xl font-medium text-gray-700">get premium membership now & get 30% off</p>
      <p className="text-gray-600 mt-3">
        Prime membership allows you to get 30% off across all products at website + free and speedy delivery
      </p>

      <form onSubmit={onSubmitHandler} className='bg-violet-400 w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="email" required className=' w-full sm:flex-1 outline-none' placeholder='Enter your e-mail' />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
