import './addPost.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function AddPost() {
    return (
        <div className='addpost_container'>
            <div className="addpost_content">
                <div className="profile"> <img src="./assets/person/person10.jpg" alt="account" /></div>
                <div className="writing_field">What's on your mind, John?</div>
            </div>
            <hr />
            <div className="post_attachments">
                <div>
                    <VideoCallIcon />
                    <p>Live video</p>
                </div>
                <div>
                    <AddPhotoAlternateIcon />
                    <p>Photo/video</p>
                </div>
                <div>
                    <EmojiEmotionsOutlinedIcon />
                    <p>Feeling/activity</p>
                </div>
            </div>
        </div>
    )
}
