import "./rightbar.css"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Rightbar() {

  return (
    <div className="rightbar_container">
      <div className="rightbar_heading">Group Conversations</div>
      <div className="create_new_group">
        <div className="add_icon"><AddOutlinedIcon className="add_icon_class" /></div>
        <div>Create New Group</div>
      </div>
    </div>
  )
}
