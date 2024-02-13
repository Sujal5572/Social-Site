import "./profile.scss"

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import Posts from "../../components/posts/Posts";
const Profile = () => {
    return (
        <div className="profile">
            <div className="images">
                <img src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    className="cover " />
                <img src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""
                    className="profilePic" />


            </div>
            <div className="profileContainer">
                <div className="uInfo">
                    <div className="left">
                        <a href="https://www.facebook.com/" >
                            <FacebookOutlinedIcon fontSize='large' />
                        </a>
                        <a href="https://www.instagram.com/">
                            <InstagramIcon fontSize='large' /></a>
                        <a href="https://www.linkedin.com/">
                            <LinkedInIcon fontSize='large' /></a>

                    </div>
                    <div className="center">
                    <span>Sujal Arya</span>
                    <div className="info">
                        <div className="item">
                            <PlaceTwoToneIcon />
                            <span>India</span>
                        </div>
                        {/* <div className="item">
                            <PlaceTwoToneIcon />
                            <span>India</span>
                        </div> */}
                        </div>
                        <button>Follow</button>
                    </div>
                    <div className="right">
                        <EmailTwoToneIcon />
                        <MoreVertTwoToneIcon />
                    </div>
                </div>
                <Posts/>
            </div>
        </div>
    )
}

export default Profile