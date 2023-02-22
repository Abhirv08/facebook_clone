import "./feed.css"
import Status from "../carousel/status/Status";
import AddPost from "../addPost/AddPost";
import Post from "../post/Post";
import { useMediaQuery } from "@mui/material";
import StatusMobile from "../carousel/statusMobile/StatusMobile";

export default function Feed() {
  const tabletsandLaptops = useMediaQuery('(min-width: 451px)')
  const mobile = useMediaQuery('(max-width: 450px')
  return (
    <div className="feed_container">
      {tabletsandLaptops && <Status />}
      {mobile && <StatusMobile />}
      <div className="feeds">
        <AddPost />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
