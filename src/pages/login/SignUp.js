import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import useToken from '../../hooks/useToken';
const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const[token] = useToken(user)
      let errorMasage;
    const Navigate = useNavigate()
    if(user || user1){
        Navigate('/')
    }

    if(error || error1){
        errorMasage = <p>
            {error?.message || error1?.message}
        </p>
    }
    const onSubmit = data => {
        createUserWithEmailAndPassword(data.email,data.password)
        console.log(data);
    }
    return (
        <div className='flex h-screen justify-center items-center '>
            <div className='card w-96 shadow-xl '>
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold text-primary">SignUp</h2>
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
                                <span className="label-text">password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is Reruired'
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
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Login" />
                    </form>
                    {errorMasage}
                    <p><small>Alrady have an account?<Link className='text-primary' to={'/login'}> please Login</Link></small></p>
                    <div className="divider"><small>OR</small></div>
                    <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline btn-success'>Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;