import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { AuthContext } from '../../contexts/AuthContext';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleSignOut = () => {
        signOutUser()
            .then(() => console.log('Sign out successful'))
            .catch(error => console.log(error));
    };

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    const links = (
        <>
            <li>
                <NavLink to="/" className="text-gray-800 hover:text-teal-600 flex items-center gap-2">
                    <i className="fas fa-home"></i> Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/about" className="text-gray-800 hover:text-teal-600 flex items-center gap-2">
                    <i className="fas fa-info-circle"></i> About
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/profile" className="text-gray-800 hover:text-teal-600">
                        <i className="fas fa-user"></i> My Profile
                    </NavLink>
                </li>
            )}
            {!user && (
                <>
                    <li>
                        <NavLink to="/login" className="text-gray-800 hover:text-teal-600">
                            <i className="fas fa-sign-in-alt"></i> Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/register" className="text-gray-800 hover:text-teal-600">
                            <i className="fas fa-user-plus"></i> Register
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
            <div className="navbar-start">
                {/* Title (clickable on mobile) */}
                <div className="lg:hidden">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-teal-600 text-2xl font-bold flex items-center gap-2 focus:outline-none"
                    >
                        <i className="fas fa-compass"></i> Event Explorer
                    </button>
                </div>
                {/* Regular title for larger screens */}
                <Link to="/" className="hidden lg:flex text-teal-600 text-2xl font-bold items-center gap-2">
                    <i className="fas fa-compass"></i> Event Explorer
                </Link>
            </div>

            {/* Center Nav Links for Desktop */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="flex items-center gap-4">
                        <div className="tooltip tooltip-bottom" data-tip={user.displayName || user.email}>
                            <img
                                src={user.photoURL || 'https://via.placeholder.com/40'}
                                alt={user.displayName || 'User'}
                                className="w-10 h-10 rounded-full cursor-pointer border-2 border-gray-500"
                            />
                        </div>
                        <button
                            onClick={handleSignOut}
                            className="btn btn-sm bg-red-600 hover:bg-red-700 text-white"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-sm bg-teal-600 hover:bg-teal-700 text-white">
                        Login
                    </Link>
                )}
            </div>

            {/* Mobile Dropdown */}
            {showMobileMenu && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md border-t p-4 lg:hidden">
                    <ul className="flex flex-col gap-3">{links}</ul>
                </div>
            )}
        </div>
    );
};

export default NavBar;
