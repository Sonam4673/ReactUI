/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Rightbar = ({data, bgcolor, color}) => {
  return (
    <>
    <div className="rightbar">
        <div className='postImg'>
        <div className='img'>
          <img id="_img"src={data.img} alt=""/>
      </div>
    {/* <div className='inside_img'>
       <div className='img'>
            <img id="_img" src={data.authorImg} alt=""/>
       </div>
         <div className='text'>
             <h3>{data.authorName}</h3>
             <p>{data.authorText}</p>
         </div>
  </div>*/}
      </div>
    </div>
    </>
  )
}

export default Rightbar
