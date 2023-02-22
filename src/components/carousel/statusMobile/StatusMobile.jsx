import './statusMobile.css'
import StatusCard from "../../carousel_item/status_card/StatusCard"
import AddStatus from '../../addStatus/AddStatus'
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { Tooltip } from '@mui/material'


export default function StatusMobile() {


    return (
        <div className='mobile_status_container'>
            <AddStatus />
            <StatusCard statusimage="./assets/status/status1.jpg" dpimage="./assets/person/person1.jpg" />
            <StatusCard statusimage="./assets/status/status2.jpg" dpimage="./assets/person/person2.jpg" />
            <Tooltip className='see_status' title="See all stories" placement='bottom'>
                <EastOutlinedIcon />
            </Tooltip>
        </div>
    )
}
