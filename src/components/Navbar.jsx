import React from 'react'
import "../style/navbar.scss"
import {BsPerson,BsSearch,BsCartCheck} from "react-icons/bs"
import {BiSolidContact} from "react-icons/bi"
import { Link } from 'react-router-dom'
import logo from "../assest/logo.png"


const Navbar = () => {
  return (
    <>
     <navbar className="nav">
        <Link to="/">
      <div className='logo'>
        <img src={logo} />
      </div>
        </Link>
      <ul>
        <li>Build Routine</li>
        <li>Skincare quiz</li>
        <li>Shop</li>
        <li>Launch product</li>
      </ul>
      <ul>
        <li><BsSearch/></li>
        <Link to="/login"><li><BsPerson/><br/>login </li></Link>
        <li><BsCartCheck/><br/>cart</li>
        <Link to="/contact"><li><BiSolidContact/><br/>contact</li></Link>
      </ul>
     </navbar>
    </>
  )
}

export default Navbar
