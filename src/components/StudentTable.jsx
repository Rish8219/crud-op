import React, { useEffect ,useState} from 'react';
import { useNavigate } from 'react-router-dom';


const StudentTable = () => {
    const navToEdit = useNavigate()
    const navToView = useNavigate()
    const navigate = useNavigate()
    const [students, setStudents] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/students").then((res) => {
            res.json().then((data) => { setStudents(data);
                // console.log(setStudents(data));
                // console.log(students);
             }).catch((err) => { console.log(err); })
        })
    }, [])
    return (
        <>
            <div className='bg-[#e5f5ea]'>
                <div className="container w-11/12 mx-auto">
                    <h1 className='text-6xl text-center font-bold text-[#6A9C89] cursor-pointer'>Student Table </h1>

                    <button className='bg-[#6A9C89] px-6 py-3 rounded-4xl hover:bg-[#C1D8C3] cursor-pointer' onClick={() => { navigate("/student/create/:id") }}>Add Student +</button>

                    <table className='mt-6 w-full text-0.5xl text-center '>
                        <thead className='w-44 text-0.5xl bg-[#FFA725]' >
                          <tr >
                                <th >Student ID</th>
                                <th >Student Name</th>
                                <th >Student Phone</th>
                                <th >Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                          { students && students.map((item)=>{
                            console.log(students);
                            return(
                             <tr key={item.id}>
                             <td className='h-12'>{item.id}</td>
                             <td>{item.name}</td>
                             <td>{item.phone}</td>
                             <td>  <button className='w-20 bg-blue-500 px-2 py-2 rounded-2xl hover:bg-blue-700 cursor-pointer' onClick={() => { navToEdit("/student/edit/:id") }}>Edit</button> <button className=' w-20 bg-[#6A9C89] px-2 py-2 rounded-2xl hover:bg-[#C1D8C3] cursor-pointer' onClick={() => { navToView("/student/view/:id") }}>View</button> <button className='w-20 bg-red-500 px-2 py-2 rounded-2xl hover:bg-red-600 cursor-pointer' onClick={() => { navToEdit("/student/edit/:id") }}>Delete</button></td>
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
