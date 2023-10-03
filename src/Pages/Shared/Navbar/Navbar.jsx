import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logoutHandle } = useContext(AuthContext);
    const handleClickLogout = () => {
        logoutHandle()
            .then(() => { })
            .catch(error => console.log(error))

    }

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>

        <li><Link to='/apoinment'>Appoinment</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>

        {
            user?.uid ?
                <>

                    <li><Link onClick={handleClickLogout}>SignOut</Link></li>
                </>
                :
                <>
                    <li><Link to='/signin'>SignIn</Link></li>
                    <li><Link to='/signup'>SignUp</Link></li>
                </>

        }



    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Doctors-portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

            <label htmlFor='dashboard-drawer' tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;