import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      }
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 ">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink className={'ml-3'} to={'/'}>Home</NavLink></li>
                    <li><NavLink className={'ml-3'} to={'/parchase'}>parchase</NavLink></li>
                    <li><NavLink className={'ml-3'} to={'/concat'}>concat</NavLink></li>
                    <li>{
                        user ? <button
                        onClick={logout}  className="btn btn-ghost"
                        >Signout</button>
                        :
                        <NavLink className={'ml-3'}
                     to={'/Login'}>Login</NavLink>}</li>
                    {/* <div className="dropdown dropdown-end">
                        <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;