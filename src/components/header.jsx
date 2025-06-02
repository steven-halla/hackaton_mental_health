import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBar = styled.nav`
    background-color: black;
    padding: 1rem;
`;

const NavList = styled.ul`
    display: flex;
    gap: 1rem;
`;

const NavItem = styled.li`
    & a {
        color: white;
        &:hover {
            color: #cbd5e0; /* equivalent to hover:text-gray-300 */
        }
    }
`;

export const Header = () => {
    return (
        <NavBar>
            <NavList>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavItem><Link to="/bio">Bio</Link></NavItem>
                <NavItem><Link to="/community">Community</Link></NavItem>
                <NavItem><Link to="/connect">Connect</Link></NavItem>
                <NavItem><Link to="/cope">Cope</Link></NavItem>
                <NavItem><Link to="/login">Login</Link></NavItem>
                <NavItem><Link to="/create-account">Create Account</Link></NavItem>
                <NavItem><Link to="/logout">Logout</Link></NavItem>
            </NavList>
        </NavBar>
    )
}
