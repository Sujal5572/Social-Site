import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./comments.scss";

const Comments = () => {

    const {currentUser}= useContext(AuthContext)
    //temp
    const comments =
        [{
            id: 1,
            desc: "very good gshsdkvv mjhgjv mjnvb mvn m nfjc  vmjvdkjvnv  v jvav khv kjk kjkjv kjvnkdv mdkv kjhv vnv mm    kfjs ",
            name: "Sujal Arya",
            userId: 1,
            profilePic: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",

        },
        {
            id: 2,
            desc: "nice  djks haghjj i wamdbvsdjv nna a pusdvjhbdfbf sy jsdbvmsbv,v vjjhdjbvj jdjjsc jjlaakdbfv sbsd fssmnamuhcbsdcb cmbbsb ",
            name: "Saurabh ",
            userId: 2,
            profilePic: "https://images.pexels.com/photos/4352137/pexels-photo-4352137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        ];
    return (
        <div className="comments">
            <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder="write a comment" />
            <button>Send</button>
            </div>
            {
                comments.map(comment => (
                    <div className="comment">
                        <img src={comment.profilePic} alt="" />
                        <div className="info">
                            <span>{comment.name}</span>
                            <p>{comment.desc}</p>
                        </div>
                        <span className="date">1 hr ago</span>
                    </div>
                ))
            }
        </div>
    )
}
export default Comments