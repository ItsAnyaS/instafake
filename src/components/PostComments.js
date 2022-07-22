import { useState } from "react";


const PostComments = (props) => {
const [commentIsLiked, setCommentIsLiked] = useState(false)
console.log(props.comment.likes)

 const handleClick = () => {
   if (commentIsLiked) {
     setCommentIsLiked((prevState) => !prevState);
     return;
   }
    // const putCommentLikes = async () => {
    //   fetch(`http://localhost:3000/posts/${props.postId}`, {
    //     method: "PATCH",
    //     headers: {
    //       "content-type": "application/json",
    //       Accept: "application/json",
    //     },
    //     body: JSON.stringify({
    //       comments: {
    //         id: props.comment.id,
    //         likes: props.comment.likes + 1,
    //       },
    //     }),
    //   });
    // };
    // putCommentLikes();
  
   setCommentIsLiked((prevState) => !prevState);
//    setCurrentLikes((prevLikes) => prevLikes + 1);
 };




return (
  <div className="comment-container">
    <div className="comment-top-container">
      <p className="comment-user">
        <strong>{props.comment.user}</strong>
      </p>
      <p className="comment-content">{props.comment.content}</p>
      <ion-icon
        name={`heart${commentIsLiked ? "" : "-outline"}`}
        onClick={() => {handleClick()}}
      ></ion-icon>
    </div>
    <div className="comment-bottom-container">
      <p className="comment-like-count"> {props.comment.likes} Likes</p>
    </div>
  </div>
);
}

export default PostComments


