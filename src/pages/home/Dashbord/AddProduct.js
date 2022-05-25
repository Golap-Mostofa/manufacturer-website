import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Lod from '../../sheard/Lod';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const { data: products, isLoading } = useQuery('products', () => fetch('https://gentle-oasis-52101.herokuapp.com/product').then(res => res.json()))

    const imgKey = '12be30ece3459e819fc126db848e42a7'
    


    const onSubmit = data => {
        // console.log(data);
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgKey}`
        fetch(url,{
            method: 'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{

            if(result.success){
                const img = result.data.url
                const product ={
                    name : data.name,
                    email:data.email,
                    product:data.product,
                    img:img
                }
                fetch(`https://gentle-oasis-52101.herokuapp.com/prodact`,{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(product)
                })
                .then(res=>res.json())
                .then(insertted=>{
                    if(insertted){
                        toast.success(`product add successfully`)
                        reset()
                    }
                    toast.error(`faild to add product`)
                })



            }
        })
        
    }
    if (isLoading) {
        return <Lod></Lod>
    }
    return (
        <div>
            <h3 className='text-3xl' > add Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* name filde */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'name is Reruired'
                            }
                        })}
                    />
                    <label className="label">

                        {errors.name?.type === "required" && <span className="label-text-alt text-red-600">
                            {errors.name?.message}</span>}

                    </label>
                </div>

                <div className='form-control w-full max-w-xs'>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Reruired'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Pleash valid Email'
                            }
                        })}
                    />
                    <label className='label'>
                        {errors.email?.type === "required" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}

                        {errors.email?.type === "pattern" && <span className="label-text-alt text-red-600">{errors.email?.message}</span>}
                    </label>
                </div>
                {/* password */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">product</span>
                    </label>
                    <input
                        type="text"
                        placeholder="product"
                        className="input input-bordered w-full max-w-xs"
                        {...register("product", {
                            required: {
                                value: true,
                                message: 'product is Reruired'
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 charactors or longer'
                            }
                        })}
                    />
                    <label className="label">
                        {errors?.password?.type === "required" && <span className="label-text-alt text-red-600">{errors?.passwoed?.message}</span>}
                        {errors.password?.type === "minLength" && <span className="label-text-alt text-red-600">{errors?.password?.message}</span>}

                    </label>
                </div>
                {/* img */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Img</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'img is Reruired'
                            }
                        })}
                    />
                    <label className="label">

                        {errors.name?.type === "required" && <span className="label-text-alt text-red-600">
                            {errors.name?.message}</span>}

                    </label>
                </div>

                <input className='btn btn-primary w-full max-w-xs' type="submit" value="add product" />
            </form>
        </div>
    );
};

export default AddProduct;