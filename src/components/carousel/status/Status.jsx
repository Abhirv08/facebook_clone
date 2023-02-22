import './status.css'
import StatusCard from "../../carousel_item/status_card/StatusCard"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';
import AddStatus from '../../addStatus/AddStatus';
import { Tooltip } from '@mui/material';

export default function Status() {
    const dp = {
        backgroundImage: 'url("./assets/person/person10.jpg")'
    }

    const phones = useMediaQuery({ query: '(min-width: 450px)' })


    return (
        <div className="status_container">
            <AddStatus />
            <StatusCard statusimage="./assets/status/status1.jpg" dpimage="./assets/person/person1.jpg" />
            <StatusCard statusimage="./assets/status/status2.jpg" dpimage="./assets/person/person2.jpg" />
            {phones && <StatusCard statusimage="./assets/status/status3.jpg" dpimage="./assets/person/person3.jpg" />}
            {phones && <MediaQuery minWidth={700}>
                <StatusCard statusimage="./assets/status/status4.jpg" dpimage="./assets/person/person4.jpg" />
            </MediaQuery>}
            <Tooltip className='see_status' title="See all stories" placement='bottom'>
                <EastOutlinedIcon />
            </Tooltip>
        </div>
    )
}
