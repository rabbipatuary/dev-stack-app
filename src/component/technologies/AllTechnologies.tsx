import React from 'react';
import type { Itechnologies } from '../../types/technologies';
import { FaStar } from "react-icons/fa";

const AllTechnologies = ({teches}) => {
    
    return (
    <div className='grid grid-cols-12 container mx-auto gap-12'>
        <div className='grid grid-cols-3 col-span-9 gap-4 p-4'>
 {
    teches.map((tech:Itechnologies)=>{
        return(
            <div className=''>
                <div className="card  shadow-sm">
  <div className="card-body">
    <div className='flex justify-between items-center'>
    <img src={tech.icon} alt="icon" className='w-[40px] h-[40px] ' />
    <span className="badge badge-soft badge-primary">{tech.badge}</span>
    </div>
    
      <h2 className="text-3xl font-bold pt-4">{tech.name}</h2>
      <p>{tech.description}</p>
      <div className='flex justify-between items-center gap-2'>
        <span className='badge badge-soft badge-accent text-black'>{tech.category}</span>
        <p>{tech.difficulty}</p>
        <div className='flex items-center'>
            <FaStar className="text-yellow-400" />
             <p>{tech.rating}</p>
            </div>
       
      </div>

    <div className="mt-6">
      <button className="btn btn-primary btn-block bg-black rounded-[10px]">Add to Stack</button>
    </div>
  </div>
               </div>
            </div>
        )

    })
 }
 </div>
         <div className='col-span-3 bg-amber-500'>
             <h1>your stack</h1> 
        </div>
 
 
 </div>


        
    );
};

export default AllTechnologies;