/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { FaHome } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoIosNotificationsOff } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { FaSellcast } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaShopware } from "react-icons/fa";
import { BiSolidLogOutCircle } from "react-icons/bi";
const Sildebar = () => {
  return (
    <>
      <div className='sidebar_content'>
      
            <div className='top_content'>
            <div className='items'>< CiLogin className='icons' />Login</div>
            <div className='items'>< FaHome className='icons' />Home</div>
            <div className='items'><IoIosNotificationsOff className='icons' />Notification</div>
            <div className='items'><IoMdContact className='icons' />contact</div>
            <div className='items'><FaSellcast className='icons' />Sell</div>
            <div className='items'><FaAmazonPay className='icons' />Pay</div>
            <div className='items'><FaShopware className='icons' />Shop</div>
            </div>
            <div className='items'><BiSolidLogOutCircle className='icons' />Logout</div>
      </div>
    </>
  )
}

export default Sildebar
