import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ReviwProduct = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl border">
                <figure className="px-10 pt-10">
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src={user ? user?.photoURL : 'https://www.w3schools.com/howto/img_avatar.png'} />
                        </div>
                    </div>

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    <h2 className=' text-2xl text-success m-3'>Review product</h2>
                    <div className=' mt-8'>

                       
                       
                        <input type="text" placeholder="Your Name" className="input input-bordered input-success w-full max-w-xs m-3" />
                        <input type="text" placeholder="Phone" className="input input-bordered input-success w-full max-w-xs m-3" />
                        <input type="text" placeholder="Lindin profile" className="input input-bordered input-success w-full max-w-xs m-3" />
                        <input type="file" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs m-3" />
                       <div>
                       <button className="btn btn-outline btn-success">SAVE</button>
                       </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviwProduct;