import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const { id, name, img, price, discription, minimum, avaleble } = tool
  // console.log(tool);
  const navigate = useNavigate()
  const servicesadd = (id) => {
    navigate(`/parchase/${id}`)
  }
  return (
    <div className="border shadow-sm">

      <div className='shadow-sm '>
        <div >
          <img className='rounded-sm p-1' src={img} alt="" />
          <div className='p-3'>
            <p className='text-center font-semibold text-green-700 text-2xl'>{name}</p>
            <p>{discription}</p>
            <p className='text-center text-green-600'>price:{price}</p>
          </div>

          <div className='text-center mt-4 pb-3'>
          
            <label onClick={() => servicesadd(id)}
              className="uppercase bg-lime-600 py-3 px-5 font-semibold text-white rounded"
            >booked New</label>
          </div>
        </div>
       
      </div>

    </div>
  );
};

export default Tool;