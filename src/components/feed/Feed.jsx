import "./feed.css"
import Status from "../carousel/status/Status";
import AddPost from "../addPost/AddPost";
import Post from "../post/Post";

export default function Feed() {

  return (
    <div className="feed_container">
      <Status />
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
