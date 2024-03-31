/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";
import { BsToggle2Off } from "react-icons/bs";
import { BsToggle2On } from "react-icons/bs";



const Navbar = ({ bgColor, color, toggleButton,toggle }) => {
  const bgcolor = color == "black"?"#cbc5c5":"black"
  
  return (

    <>
    <div className="Nav_bar"
    
    style={{
      backgroundColor:`${bgcolor}`
    }}
    
    
    >
    <div className='logo'
    
    style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`,
    }}
    
    
    >WDW
    <div onClick={toggleButton}>
            {toggle?(

              <BsToggle2On />
            ):(
              <BsToggle2Off />
            )}
            {" "}
          </div>
    
    
    </div>
    <div className='search'
    style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`,
    }}
    >
    <div className='left'> 
    <FaSearch/>search here.....</div>
    <div className='right'> <IoFilter/>Filter</div>
    </div>
    <div className='seller'
    style={{
      backgroundColor: `${bgColor}`,
      color: `${color}`,
    }}
    >As a  Seller</div>
    </div>
</>
    
  );
};

export default Navbar
