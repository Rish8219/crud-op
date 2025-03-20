import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const StudnentEdit = () => {
  let { studentId } = useParams();
  console.log("the id is",studentId);
  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const navigate = useNavigate()
 
  useEffect(() => {
    fetch("http://localhost:8000/students/" + studentId)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setId(data.id)
        setName(data.name)
        setPhone(data.phone)
        

      })
      .catch((err) => { console.log(err); })
  },[studentId])
  function handleSubmit(e) {
    e.preventDefault();
    const studentData = { id, name, phone };
    fetch("http://localhost:8000/students/"+studentId, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(studentData)
    })
      .then(() => {
        alert("Student Data Updated Sucessfully")
        navigate("/")
      })
      .catch((err) => {
        console.log(err)
        alert("Student Data Not Saved Sucessfully")
      })
     
  }
  function handelButton(e){
    e.preventDefault()
    navigate("/")
  }

  return (
    <div className='bg-[#C1D8C3]'>
      <div className='container h-full w-11/12 mx-auto'>
        <h1 className='text-6xl text-center font-bold text-[#6A9C89] cursor-pointer'>Edit-Student </h1>
        <div className='w-1/2 my-10 mx-auto bg-[#6A9C89] p-5 rounded-2xl'>
          <form onSubmit={handleSubmit}>
            <h2 className='text-5xl text-center font-bold text-[#C1D8C3]'>Update-Form</h2>
            <div className='flex flex-col mt-3'>
              <label  className= "text-2xl  font-bold" htmlFor="id">ID:</label>
              <input type="number" id="id" name="id" value={id} onChange={(e) => setId(e.target.value)} className='bg-white h-8 p-4 rounded-2xl' required />
            </div>
            <div className='flex flex-col mt-3'>
              <label className= "text-2xl font-bold" htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className='bg-white h-8 p-4 rounded-2xl' required />
            </div>
            <div className='flex flex-col mt-3'>
              <label className= "text-2xl font-bold" htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className='bg-white h-8 p-4 rounded-2xl' required />
            </div>
            <div>
              <button className=" w-20 font-bold bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 cursor-pointer mt-3">Update</button>
              <button className=" w-20 font-bold bg-[#D76C82] p-3 rounded-2xl hover:bg-[#B03052] cursor-pointer ml-2 mt-3" onClick={(e)=>{handelButton(e)}}>Back</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StudnentEdit;
