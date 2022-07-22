import { useState} from "react";
import PostComments from "./PostComments";


const Post = ({
  user,
  content,
  caption,
  likes,
  comments,
  id,
  setIsExpanded,
  setExpandedId
}) => {
  const [liked, setLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);
  const [commentsIsShown, setCommentsIsShown] = useState(false);
  const postId = id;
  const handleClick = () => {
    if (liked) {
      setLiked((prevState) => !prevState);
      return;
    }
    const putLikes = async () => {
      fetch(`http://localhost:3000/posts/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          likes: likes + 1,
        }),
      });
    };
    putLikes();
    setLiked((prevState) => !prevState);
    setCurrentLikes((prevLikes) => prevLikes + 1);
  };

  const handleExpandedChange = (id) => {
     setIsExpanded((prev) => !prev);
      setExpandedId(id)
  }

  return (
    <div className="post">
      <h3>{user}</h3>
      <img src={content} alt="" />
      <div className="actions">
        <ion-icon
          name={`heart${liked ? "" : "-outline"}`}
          className={`${liked ? "liked" : ""}`}
          onClick={() => {
            handleClick();
          }}
        ></ion-icon>
        <ion-icon
          name="chatbubbles-outline"
          class="comment-btn"
          onClick={() => {
           handleExpandedChange(id)
          }}
        ></ion-icon>
        <ion-icon name="paper-plane-outline" className="share-btn"></ion-icon>
        <ion-icon name="bookmark-outline" id="favorite-btn"></ion-icon>
      </div>
      <p className="post-like-count">{currentLikes} likes</p>
      <p className="caption">
        <strong> {user}</strong> {caption}
      </p>
      <div className="comment-section">
        {commentsIsShown &&
          comments.map((comment) => {
            return (
              <PostComments
                comment={comment}
                key={comment.id}
                postId={postId}
              />
            );
          })}
        <p
          className="show-comment-btn"
          onClick={() => {
            setCommentsIsShown((prevState) => !prevState);
          }}
        >
          {commentsIsShown ? "Show less" : `View ${comments.length} comments`}
        </p>
        <br />
        <div className="add-comment">
          <p>Add Comment...</p>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Post 
