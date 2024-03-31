/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import { GrLike } from "react-icons/gr";
import { FaComment } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
const Postbar = ({data, bgcolor, color}) => {
  return (
    <>
      <div className="postc">
        <div className="person">
        <div className="author">
         <div className="img">
              <img src={data.pImg}
              alt=""/>
         </div>
         <div className="text">
            <h3>{data.userName}</h3>
            <p>{data.title}</p>
         </div>
        </div>
        <div className="dot"><HiDotsVertical /></div>
        </div>
        <p>
        {data.description}
        </p>
        <div className="post_img">
         <img src={data.mImg} alt="" />
        </div>
        <div className="like_comment">
             <div className="items"><GrLike className="items" />{data.like}{" "}</div>
             <div className="items"><FaComment className="items" />{data.comment}{" "} </div>
             <div className="items"><CiShare2 className="items" />{data.share}{" "}</div>
        </div>
      </div>
    </>
  )
}

export default Postbar
