import Post from "../post/Post";
import "./posts.scss"

const Posts =()=>{

    const posts = [
        {
            id: 1,
            name: "Sujal Arya",
            userId:1,
            profilePic:
            "https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
            desc:"fsdffv kmsvs sdv v svv svvfwedv",
            img: "https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

        },


        {
            id: 2,
            name: "someone",
            userId:2,
            profilePic:"https://images.pexels.com/photos/1542252/pexels-photo-1542252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            desc:"jir ibs v i so dndkv vndfkjdvcd ",


        },
    ];




    return(
        <div className="posts">
            {posts.map(post=>(
               <Post post={post} key={post.id}/>
            ))}
        </div>
    )
}

export default Posts;