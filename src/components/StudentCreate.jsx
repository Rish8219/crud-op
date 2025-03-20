import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const StudentCreate = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        const studentData = { id, name, phone };
        fetch("http://localhost:8000/students", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: JSON.stringify(studentData)
        })
            .then((res) => {
             
                alert("Student Data Saved Sucessfully")
                navigate("/")
            })
            .catch((err) => { 
                console.log(err) 
                alert("Student Data Not Saved Sucessfully")
            })
    }
    return (
        <div className='h-screen bg-[#C1D8C3]'>
            <div className='container h-full w-11/12 mx-auto'>
                <h1 className='text-6xl text-center font-bold text-[#6A9C89] cursor-pointer'>Create Student </h1>
                <div className='w-1/2 my-10 mx-auto bg-[#6A9C89] p-5 rounded-2xl'>
                    <form onSubmit={handleSubmit}>
                        <h2 className='text-5xl text-center font-bold text-[#C1D8C3] '>Fill-Form</h2>
                        <div className='flex flex-col mt-3'>
                            <label className= "text-2xl  font-bold" htmlFor="id">ID:</label>
                            <input type="number" id="id" name="id" placeholder='Enter the id' value={id} onChange={(e) => setId(e.target.value)} className='bg-white h-8 p-4 rounded-2xl' required/>
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label className= "text-2xl font-bold" htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={name} placeholder='Enter the name' onChange={(e) => setName(e.target.value)} className='bg-white h-8 p-4 rounded-2xl'  required/>
                        </div>
                        <div className='flex flex-col mt-3'>
                            <label className= "text-2xl font-bold"  htmlFor="phone">Phone:</label>
                            <input type="tel" id="phone" name="phone" value={phone} placeholder='Enter the phone no.' onChange={(e) => setPhone(e.target.value)} className='bg-white h-8 p-4 rounded-2xl' required />
                        </div>
                        <div>
                            <button className="w-20  font-bold bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 cursor-pointer mt-3">Save</button>
                            <button className=' ml-2 font-bold w-20 bg-red-500 p-3 rounded-2xl hover:bg-red-700 cursor-pointer' onClick={()=>navigate("/")}>Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StudentCreate;
