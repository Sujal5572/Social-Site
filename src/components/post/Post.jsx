import "./post.scss"
// import Share from  "../../Icon/share.png";
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

import { Link } from "react-router-dom"
import Comments from "../comments/Comments";
import { useState } from "react";


const Post = ({ post }) => {

    const [commentOpen, setCommentOpen] = useState(false)
    //temporary
    const liked = false;
    return (
        <div className='post'>
            <div className="container">
                <div className="user">
                    <div className="userInfo">
                        <img src={post.profilePic} alt="" />
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{ TextDecoration: "none", color: "inherit" }}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="date"> 1 min ago</span>
                        </div>
                    </div>
                    <MoreHorizTwoToneIcon />
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt=""/>
                </div>
                <div className="info">
                    <div className="item">
                        {liked ?< FavoriteOutlinedIcon/>: <FavoriteBorderOutlinedIcon />} 
                        11 Likes
                    </div>

                    <div className="item"  onClick={()=>setCommentOpen(!commentOpen)} >
                      <TextsmsOutlinedIcon />
                      12 comments
                    </div>

                    <div className="item">
                       <ShareOutlinedIcon/>
                    </div>

                </div>
                {commentOpen && <Comments/>}
            </div>

        </div>
    )
}

export default Post