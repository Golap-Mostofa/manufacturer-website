import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [Tools,SetTools] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>SetTools(data))
    },[])
    return (
        <div>
            <p className='text-center text-3xl bg-green-600'>Availabole bike repeare Tools</p>
            <div>
                {
                    Tools.map(tool=><Tool
                    tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;