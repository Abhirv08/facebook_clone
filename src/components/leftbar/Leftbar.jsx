import "./leftbar.css"
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import { useState } from "react";

export default function Leftbar() {
  const list1 = [
    {
      id: 1,
      image: <AccountCircleOutlinedIcon />,
      title: "John Doe"
    },
    {
      id: 2,
      image: <PeopleAltOutlinedIcon />,
      title: "Find Friends"
    },
    {
      id: 3,
      image: <HistoryOutlinedIcon />,
      title: "Memories"
    },
    {
      id: 4,
      image: <Groups2OutlinedIcon />,
      title: "Groups"
    },
    {
      id: 5,
      image: <StorefrontOutlinedIcon />,
      title: "Marketplace"
    },
    {
      id: 6,
      image: <OndemandVideoOutlinedIcon />,
      title: "Video"
    },
    {
      id: 7,
      image: <BookmarkBorderOutlinedIcon />,
      title: "Saved"
    },
    {
      id: 8,
      image: <FlagOutlinedIcon />,
      title: "Pages"
    },
    {
      id: 9,
      image: <EventOutlinedIcon />,
      title: "Event"
    }
  ]

  const list2 = [
    {
      id: 10,
      image: <CampaignOutlinedIcon />,
      title: "Ad Center"
    },
    {
      id: 11,
      image: <EqualizerOutlinedIcon />,
      title: "Ad Maanger"
    },
    {
      id: 12,
      image: <BloodtypeOutlinedIcon />,
      title: "Blood Donation"
    },
    {
      id: 13,
      image: <YardOutlinedIcon />,
      title: "Climate Science Center"
    },
    {
      id: 14,
      image: <GradeOutlinedIcon />,
      title: "Fovourites"
    },
    {
      id: 15,
      image: <SportsEsportsOutlinedIcon />,
      title: "Play Games"
    }
  ]

  const [showlist2, setShowlist2] = useState(true);


  return (
    <ul className="leftbar_container">
      {list1.map(item => (
        <Link className="leftbar_item" id={item.id}>
          <div>{item.image}</div>
          <div className="leftbar_item_title"> {item.title} </div>
        </Link>
      ))}
      {
        showlist2 && list2.map(item => (
          <Link className="leftbar_item" id={item.id}>
            <div>{item.image}</div>
            <div className="leftbar_item_title"> {item.title} </div>
          </Link>
        ))
      }

      {!showlist2 && <div className="leftbar_item">
        <div><ExpandMoreOutlinedIcon /></div>
        <div className="leftbar_item_title"> See more </div>
      </div>}
      {showlist2 && <div className="leftbar_item">
        <div><ExpandLessOutlinedIcon /></div>
        <div className="leftbar_item_title"> See less </div>
      </div>}
    </ul>
  )
}
