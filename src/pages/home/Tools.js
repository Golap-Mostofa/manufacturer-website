import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Parchase from './Parchase';
import Tool from './Tool';

const Tools = () => {
    const Navigate = useNavigate()
    const [Tools,SetTools] = useState([])
    const [parchase,setParchase] = useState(null)
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>SetTools(data))
    },[])
    return (
        <div>
            <p className='text-center text-5xl text-indigo-500 mb-8 font-bold'>Available bike repeare Tools</p>
            <div className='md:grid grid-cols-3 container mx-auto gap-12 '>
                {
                    Tools?.map(tool=><Tool
                    tool={tool}
                
                    ></Tool>)
                }
            </div>
           
        </div>
    );
};

export default Tools;