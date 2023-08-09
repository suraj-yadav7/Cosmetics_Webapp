import React from 'react'
import "../style/navbar.scss"
import {BsPerson,BsSearch,BsCartCheck} from "react-icons/bs"


const Navbar = () => {
  return (
    <>
     <navbar className="nav">
      <div className='logo'>
        logo
      </div>
      <ul>
        <li>Build Routine</li>
        <li>Skincare quiz</li>
        <li>Shop</li>
        <li>Launch product</li>
      </ul>
      <ul>
        <li><BsPerson/></li>
        <li><BsSearch/></li>
        <li><BsCartCheck/></li>
        <li></li>
      </ul>
     </navbar>
    </>
  )
}

export default Navbar
