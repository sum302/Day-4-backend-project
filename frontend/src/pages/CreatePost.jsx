import React from 'react'
import axios from "axios"
import {usenavigate} from "react-router-dom"

const CreatePost = () => {

  const handleSubmit=async(e)=>{
    e.preventDefault()

const formData=new FormData(e.target)
axios.post("http://localhost:3000/create-post",formData)
.then((res)=>{
  Navigate("/feed")
})
.catch((err)=>{
  console.log(err)
  alert("Error creating post")
})
  }
  return (
   <section className='create-post-section'>


<h1>Create Post</h1>

<form onSubmit={handlesubmit}>
<input type="file" name="image" accept="image/*" />
<input type="text" name='caption'placeholder='Enter caption required' />
<button type="Submit"></button>
</form>
   </section>

  )
}

export default CreatePost
