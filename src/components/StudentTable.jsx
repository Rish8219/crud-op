import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const StudentTable = () => {
    const navToEdit = useNavigate()
    const navToView = useNavigate()
    const navigate = useNavigate()
    const [students, setStudents] = useState([])
    function viewDetails(id) {
        console.log(id);
        navToView(`/student/view/${id}`)
    }
    function viewEdit(id) {
        console.log(id);
        navToEdit(`/student/edit/${id}`)
    }
    function removeDetails(id){
        console.log(id);
       let ms= window.confirm("are you sure you want to delete the student?")
        if(ms){
            fetch("http://localhost:8000/students/"+id,{
                method:"DELETE"
            }).then(()=>{alert("Student Deleted Sucessfully")
                window.location.reload()
            })
            .catch((err)=>{
                console.log(err)
                alert("Student Data Not Deleted Sucessfully");
            })
        }
    }

    useEffect(() => {
        fetch("http://localhost:8000/students")
            .then((res) => {
                res.json()
                    .then((data) => {
                        setStudents(data);
                        // console.log(setStudents(data));
                        // console.log(students);
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            })
    }, [])
    return (
        <>
            <div className='h-screen overflow-hidden bg-[#e5f5ea]'>
                <div className="container w-11/12 mx-auto">
                    <h1 className='text-6xl text-center font-bold text-[#6A9C89] cursor-pointer'>Student Records </h1>

                    <button className='bg-[#6A9C89] px-6 py-3 rounded-4xl font-bold shadow-2xl hover:scale-150 transition all duration-1000 hover:bg-[#597c5c] cursor-pointer' onClick={() => { navigate("/student/create/:id") }}>Add Student +</button>

                    <table className='mt-6 w-full text-0.5xl text-center '>
                        <thead className='w-44 text-0.5xl bg-[#FFA725]' >
                            <tr className='h-13 text-2xl' >
                                <th >Student ID</th>
                                <th >Student Name</th>
                                <th >Student Phone</th>
                                <th >Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students && students.map((item, index) => {
                                return (
                                    <tr style={index % 2 == 0 ? { backgroundColor: "#EFEFEF" } : { backgroundColor: "#C1D8C3" }} key={item.id}>
                                        <td className='h-12 mt-4'>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>  <button className='w-20 font-bold bg-blue-500 px-2 py-2 rounded-2xl hover:bg-blue-600 cursor-pointer' onClick={() => { viewEdit(item.id) }}>Edit</button>
                                            <button className=' w-20 font-bold ml-1 mr-1 bg-[#6A9C89] px-2 py-2 rounded-2xl hover:bg-[#597c5c] cursor-pointer' onClick={() => {viewDetails(item.id)}}>View</button>
                                            <button className='w-20 font-bold bg-[#D76C82] px-2 py-2 rounded-2xl hover:bg-[#B03052] cursor-pointer' onClick={()=>removeDetails(item.id)}>Delete</button>
                                            </td>
                                    </tr>)

                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default StudentTable;
