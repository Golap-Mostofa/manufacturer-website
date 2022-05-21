import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1 ">
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-0">
                    <li><NavLink className={'ml-3'} to={'/'}>Home</NavLink></li>
                    <li><NavLink className={'ml-3'} to={'/about'}>about</NavLink></li>
                    <li><NavLink className={'ml-3'} to={'/concat'}>concat</NavLink></li>
                    <li><NavLink className={'ml-3'} to={'/Login'}>Login</NavLink></li>
                    <div class="dropdown dropdown-end">
                        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                            <div class="w-10 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </div>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a class="justify-between">
                                    Profile
                                    <span class="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;