import "./rightbar.css"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useState } from "react";

export default function Rightbar() {

  return (
    <div className="rightbar_container">
      <div className="rightbar_heading">Group Conversations</div>
      <div className="create_new_group">
        <div className="add_icon"><AddOutlinedIcon className="add_icon_class" /></div>
        <div>Create New Group</div>
      </div>
      <div className="tooltip_container">
        <span className='tooltip_text'>New Message</span>
        <div className="new_message"  
        onMouseEnter={() => document.querySelector(".tooltip_text").style.visibility = 'visible'}
        onMouseLeave= {() => document.querySelector(".tooltip_text").style.visibility = 'hidden'}>
          <img src="./assets/edit.png" alt="new message" />
        </div>
      </div>
    </div>
  )
}
