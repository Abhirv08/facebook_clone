import './status.css'
import StatusCard from "../../carousel_item/status_card/StatusCard"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

export default function Status() {
    const dp = {
        backgroundImage: 'url("./assets/person/person10.jpg")'
    }

    const handleMouseEnter = () => {
        document.querySelector(".story_dp").style.transform = 'scale(102%)';
    }

    return (
        <div className="status_container">
            <div className="create_own_story_container"
                onMouseEnter={() => handleMouseEnter}
            >
                <div className="story_dp_container">
                    <div className="story_dp" style={dp}></div>
                </div>
                <div className="add_story_icon_container"><AddOutlinedIcon className="add_story_icon" /></div>
                <div className="story_dp_text">Create story</div>
            </div>
            <StatusCard statusimage="./assets/status/status1.jpg" dpimage="./assets/person/person1.jpg" />
            <StatusCard statusimage="./assets/status/status2.jpg" dpimage="./assets/person/person2.jpg" />
            <StatusCard statusimage="./assets/status/status3.jpg" dpimage="./assets/person/person3.jpg" />
            <StatusCard statusimage="./assets/status/status4.jpg" dpimage="./assets/person/person4.jpg" />
            <div className="see_status"
                onMouseEnter={() => document.querySelector(".see_all_stories").style.visibility = "visible"}
                onMouseLeave={() => document.querySelector(".see_all_stories").style.visibility = "hidden"}
            >
                <EastOutlinedIcon className="east_faced_icon" />
                <span className="see_all_stories">See all stories</span>
            </div>
        </div>
    )
}
