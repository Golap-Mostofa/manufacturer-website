import React from 'react';
import { useQuery } from 'react-query';
import Lod from '../../sheard/Lod';
import ProductRow from './ProductRow';

const ManageProduct = () => {
    const { data: products, isLoading,refetch } = useQuery('doctors', () => fetch(`http://localhost:5000/pd`).then(res => res.json()))
    if (isLoading) {
        return <Lod></Lod>
    }
    return (
        <div className=''>
            <h2 className='text-3xl text-success font-bold text-center mt-12'>adding product: <span>{products?.length}</span></h2>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-10'>
                {
                    products.map(product => <ProductRow
                        key={product._id}
                        product={product}
                        refetch={refetch}
                    ></ProductRow>)
                }
            </div>


        </div>
    );
};

export default ManageProduct;