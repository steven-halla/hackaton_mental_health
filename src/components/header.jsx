import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="bg-black p-4">
            <ul className="flex space-x-4">
                <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                <li><Link to="/bio" className="text-white hover:text-gray-300">Bio</Link></li>
                <li><Link to="/community" className="text-white hover:text-gray-300">Community</Link></li>
                <li><Link to="/connect" className="text-white hover:text-gray-300">Connect</Link></li>
                <li><Link to="/cope" className="text-white hover:text-gray-300">Cope</Link></li>
                <li><Link to="/login" className="text-white hover:text-gray-300">Login</Link></li>
                <li><Link to="/create-account" className="text-white hover:text-gray-300">Create Account</Link></li>
                <li><Link to="/logout" className="text-white hover:text-gray-300">Logout</Link></li>
            </ul>
        </nav>
    )
}
