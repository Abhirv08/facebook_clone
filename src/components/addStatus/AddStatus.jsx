import './addStatus.css'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function AddStatus() {
    const dp = {
        backgroundImage: 'url("./assets/person/person10.jpg")'
    }

    return (
        <div className="add_story_container">
            <div className="story_dp_container">
                <div className="story_dp" style={dp}></div>
            </div>
            <div className="add_story_icon_container"><AddOutlinedIcon className="add_story_icon" /></div>
            <div className="story_dp_text">Create story</div>
        </div>
    )
}
