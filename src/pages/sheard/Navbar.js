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
                   
                    <li>{user && <NavLink className={'ml-3'} to={'/dashbord'}>dashbord</NavLink>}</li>
                    <li><NavLink className={'ml-3'} to={'/concat'}>concat</NavLink></li>
                    <li>{
                        user ? <button
                            onClick={logout} className="btn btn-ghost"
                        >Signout</button>
                            :
                            <NavLink className={'ml-3'}
                                to={'/Login'}>Login</NavLink>}</li>
                    <div className='navbar-end'>
                    <label htmlFor="my-drawer-2"  tabIndex="1" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                        </label>
                    </div>

                    

                </ul>
            </div>
        </div>
    );
};

export default Navbar;