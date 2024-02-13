import "./leftbar.scss"
import Friends from "../../Icon/1.png"
import Groups from "../../Icon/group.png"
import Market from "../../Icon/market.png"
import Watch from "../../Icon/watch.png"
import Memories from "../../Icon/memories.png";
import Gallery from "../../Icon/gallery.png";
import Videos from "../../Icon/videos.png";
import Gaming from "../../Icon/game.png";
import Events from "../../Icon/events.png";
import Messages from "../../Icon/msg.png";
import Fraud from "../../Icon/fraud.png";
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

const LeftBar =()=>{
const {currentUser}= useContext(AuthContext);
    
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img 
                    src="https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="" 
                    />
                <span>{currentUser.name}</span>
                    </div>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                    <img src={Market} alt="" />
                    <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memories} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Shortcuts</span>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <span>Others</span>
                    <div className="item">
                        <img src={Fraud} alt="" />
                        <span>Fraud</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBar