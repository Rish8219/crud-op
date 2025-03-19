import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentTable = () => {
    const navToEdit = useNavigate()
    const navToView = useNavigate()

    const navigate = useNavigate()
    return (
        <>
            <div className='bg-[#e5f5ea]'>
                <div className="container w-11/12 mx-auto">
                    <h1 className='text-6xl text-center font-bold text-[#6A9C89] cursor-pointer'>Student Table </h1>

                    <button className='bg-[#6A9C89] px-6 py-3 rounded-4xl hover:bg-[#C1D8C3] cursor-pointer' onClick={() => { navigate("/student/create/:id") }}>Add Student</button>

                    <table className='w-full text-0.5xl border-4 border-[black] text-center '>
                        <thead className='text-0.5xl bg-[#FFA725]' >
                            <tr >
                                <th >Student ID</th>
                                <th >Student Name</th>
                                <th >Student Phone</th>
                                <th >Actions</th>
                            </tr>
                        </thead>
                        <tbody className='mt-6'>
                            <tr>
                                <td>1</td>
                                <td>Rishabh</td>
                                <td>454545454</td>
                                <td>  <button className='w-20 bg-red-700 px-2 py-2 rounded-2xl hover:bg-red-900 cursor-pointer' onClick={() => { navToEdit("/student/edit/:id") }}>Edit</button> <button className=' w-20 bg-[#6A9C89] px-2 py-2 rounded-2xl hover:bg-[#C1D8C3] cursor-pointer' onClick={() => { navToEdit("/student/view/:id") }}>View</button> <button className='w-20 bg-red-700 px-2 py-2 rounded-2xl hover:bg-red-900 cursor-pointer' onClick={() => { navToEdit("/student/edit/:id") }}>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default StudentTable;
