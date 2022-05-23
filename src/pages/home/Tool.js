import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
  const {id, name, img, price, discription, minimum, avaleble } = tool
  // console.log(tool);
  const navigate = useNavigate()
  const servicesadd = (id)=>{
    navigate(`/parchase/${id}`)
  }
  return (
    <div className="card lg-max:w-lg  shadow-xl">
      <figure><img src='' alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{price}</p>
        <p>{discription}</p>
        <div className="card-actions justify-around">
          <div className="badge badge-outline">mini..{minimum}</div>
          <div className="badge badge-outline">Avail...{avaleble}</div>
        </div>
        <label onClick={() => servicesadd(id)}
          className="btn btn-primary mt-4"
        >open modal</label>
      </div>

    </div>
  );
};

export default Tool;