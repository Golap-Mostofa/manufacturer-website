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
            <p className='text-center text-3xl text-green-600'>Availabole bike repeare Tools</p>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    Tools.map(tool=><Tool
                    tool={tool}
                    setParchase={setParchase}
                    ></Tool>)
                }
            </div>
            {
             parchase && <Parchase 
             parchase={parchase}
             ></Parchase>
            }
        </div>
    );
};

export default Tools;