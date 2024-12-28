import React, { useState } from 'react'
import Button from '../components/Button'
import Pattern from '../components/Pattern'
import Animation from '../components/Animation'




const addbook = () => {

  const [formData, setFormData] = useState({})
  const [imageData, setImagedata] = useState()

  const handlechange = (e)=>{
    
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(e.target.value)
  }
  const addBook = (e)=>{
    e.preventDefault()
    console.log("form submitted")
  }

  return (
   <>
   
   <div className='flex  items-center justify-center min-h-screen  font-serif bg-gradient-to-b from-indigo-600 to-indigo-500  p-11 rounded shadow-md'>
    
    <form className='bg-gradient-to-b from-violet-700
     to-indigo-700 p-11 rounded shadow-md w-96 h-[540px]
      text-white' onSubmit={addBook}>
    <div className='flex mb-12 items-center justify-center mt-10'>
            <Animation className='px-4 py-2 bg-blue-500 text-white rounded '>
              Submit
            </Animation>
            </div>
      <h1 className='text-[30px] text-center'>Bookiee</h1>
      <label>Name : </label>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="name" onChange={handlechange}  /><br></br>
      <label>Author : </label>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="author" onChange={handlechange} /><br></br>
      <label>Genre : </label>
      <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" name="genre" onChange={handlechange} /><br></br>
      <label>Description : </label>
      <textarea className="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name='description' onChange={handlechange}></textarea><br></br>
      <input type='file' name='image' onChange={(e) => setImagedata(e.target.files[0])}/>

     <div className='flex items-center justify-center mt-10'>
            <Button type="submit" value="Submit"  className='px-4 py-2 bg-blue-500 text-white rounded '>
              Submit
            </Button>
          </div>
    </form>
    
   
    
    </div>

    </>
    
  )
}

export default addbook