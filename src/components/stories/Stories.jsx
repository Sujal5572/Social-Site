import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./stories.scss"

const Stories = () => {

    const {currentUser} = useContext(AuthContext)

    //temporary
    const stories = [
        {
            id: 1,
            name: "Sujal Arya",
            img: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 2,
            name: "someone",
            img: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },
    ];
    return (
        <div className="stories">
            <div className="story">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>

            {stories.map(story => (
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories;