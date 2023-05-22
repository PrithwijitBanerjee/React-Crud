import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import { Link } from 'react-router-dom';
const NavbarContainer=styled(AppBar)`
        background-color:black;
`
const TypoItem=styled(Link)`
        color:inherit;
        margin-right:20px;
        font-size:20px;
        text-decoration:none;
`
const Navbar = () => {
  return (
    <>
        <NavbarContainer position='static'>
            <Toolbar>
                    <TypoItem to='/'>Home</TypoItem>
                    <TypoItem to='/add'>Add Users</TypoItem>
                    <TypoItem to='/all'>All Users</TypoItem>
            </Toolbar>
        </NavbarContainer>
    </>
  )
}

export default Navbar