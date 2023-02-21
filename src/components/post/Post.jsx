import './post.css'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function Post() {
    return (
        <div className='post_container'>
            <div className='dp_and_name_container'>
                <div className="dp_and_name">
                    <div className="profile"> <img src="./assets/person/person10.jpg" alt="account" /></div>
                    <div className='name'>John <br /> <span>3 d</span></div>
                </div>
                <div className='more_actions_icons'>
                    <div><MoreHorizIcon className='more_actions'/></div>
                    <div><ClearOutlinedIcon className='remove' /></div>
                </div>
            </div>
            <img src="./assets/person/person10.jpg" alt="post" />
            <div className="likes_comments_and_share_container">
                <div className="likes_and_comments">
                    <div className="likes_count">
                        <div>
                            <ThumbUpAltIcon sx={{ fontSize: 20 }} className='thumbs-up-icon' />
                            <FavoriteOutlinedIcon sx={{ fontSize: 20 }} className='favourite-icon' />
                        </div>
                        <p>356</p>
                    </div>
                    <div className="comment_count">
                        <p>43</p>
                        <CommentIcon />
                    </div>

                </div>
                <hr />
                <div className="likes_comments_and_share">
                    <div>
                        <ThumbUpOffAltIcon />
                        <p>Like</p>
                    </div>
                    <div>
                        <InsertCommentOutlinedIcon />
                        <p>Comment</p>
                    </div>
                    <div>
                        <ShareIcon />
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
