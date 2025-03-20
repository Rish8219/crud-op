import React, { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const StudentView = () => {
    const {id}  =useParams()
    const [studentData,setStudent]=useState({})
    useEffect(()=>{
        fetch("http://localhost:8000/students/"+id)
        .then((res)=>res.json())
        .then((data)=>{ setStudent(data)})
        .catch((err)=>{console.log(err);})
    },[])
    console.log(id)
    return (
        <div className='bg-[#C1D8C3]'>
            <div className="container w-11/12 mx-auto">
            <h1 className='text-6xl text-center font-bold text-[#6A9C89] cursor-pointer'>Student View </h1>
            <div className='w-11/12 my-10 mx-auto bg-[#6A9C89] p-5 rounded-2xl'>
            <h1 className='text-5xl text-center font-bold text-[#C1D8C3]'>Student Details</h1>
            { studentData &&   <div className="details mt-3 text-2xl font-bold  mx-auto ">
           
            <p className='mt-3 ml-3'>Id  :   {studentData.id}</p>
            <p className='mt-3 ml-3'>Name  :  {studentData.name}</p>
            <p className='mt-3 ml-3'>Phone  :  {studentData.phone}</p>
            <div>
           <Link to={"/"}><button className="w-20 bg-blue-500 p-3 rounded-2xl hover:bg-blue-600 cursor-pointer mt-3">Back</button></Link>
           

            </div>
            </div> }
            </div>
            

            </div>
          
        </div>
      

    );
}

export default StudentView;
