import React from 'react';
import { toast } from 'react-toastify';

const ProductRow = ({ product, refetch }) => {
    const { name, img, _id, email } = product

    const hendaledalate = (id) => {

        const prosude = window.confirm('are you sure you want to delete')
        if (prosude) {
            const url = `https://gentle-oasis-52101.herokuapp.com/pd/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    toast.success(`Delete ${name}`)
                    refetch()


                })
        }

       
    }
    return (
        <div className=''>
            <img src={img} alt="" />
            <h2 className='text-success text-xl uppercase font-semibold'>name:{name}</h2>
            <p className='text-indigo-500 font-thin'>sit amet consectetu
                r
                sit amet consectetur adipisicing elit. Illum, nostrum.</p>
            <button onClick={() => hendaledalate(_id)} className='uppercase btn btn-success btn-sm'>delete</button>
        </div>
    );
};

export default ProductRow;