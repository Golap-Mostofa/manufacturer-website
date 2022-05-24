import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl font-bold text-indigo-600'>Dasahbord</h2>
                    <Outlet/>
                 

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/dashbord'}>Dashbord</Link></li>
                        <li><Link to={'/dashbord/review'}>MyRevew</Link></li>
                        <li><Link to={'/dashbord/addproduct'}>Add product</Link></li>
                        <li><Link to={'/dashbord/users'}>All user</Link></li>
                        <li><Link to={'/dashbord/manage'}>Manage product</Link></li>
                       
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashbord;