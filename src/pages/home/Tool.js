import React from 'react';
import { Link } from 'react-router-dom';

const Tool = ({ tool, setParchase }) => {
  const { name, img, price, discription, minimum, avaleble } = tool
  return (
    <div class="card lg-max:w-lg  shadow-xl">
      <figure><img src='' alt="Shoes" /></figure>
      <div class="card-body">
        <h2 class="card-title">
          {name}
          <div class="badge badge-secondary">NEW</div>
        </h2>
        <p>{price}</p>
        <p>{discription}</p>
        <div class="card-actions justify-around">
          <div class="badge badge-outline">mini..{minimum}</div>
          <div class="badge badge-outline">Avail...{avaleble}</div>
        </div>
        <label onClick={() => setParchase(tool)}
          for="my-modal-6" class="btn btn-primary mt-4"
        >open modal</label>
      </div>

    </div>
  );
};

export default Tool;