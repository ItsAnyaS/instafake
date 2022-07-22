const ExpandedPost = ({ user, content, caption, likes, comments, id }) => {
 return (
   <div id="expanded-post">
     <div id="expanded-post-container">
       <div id="expanded-post-content-inner">
         <img src={content} alt="" />
         <div id="expanded-post-content">
           <p id="expanded-post-user">
             <strong>{user}</strong>
           </p>
           <hr id="expanded-post-divider" />
           <div className="expanded-post-comment-section">
             <ul id="expanded-post-comment-ul">
               {comments.map((element) => {
                 return (
                   <li id="expanded-post-comment-list-item">
                     <strong>{element.user}</strong> {element.content}
                     <ion-icon
                       name="heart-outline"
                       id="expanded-post-comment-like-btn"
                     ></ion-icon>
                   </li>
                 );
               })}
             </ul>
           </div>
           <div className="expanded-comment-interaction-section">
             <div className="expanded-post-interaction-section">
               <ion-icon name="heart-outline"></ion-icon>
               <ion-icon name="chatbubble-outline"></ion-icon>
               <ion-icon name="paper-plane-outline" id="third-child"></ion-icon>
               <ion-icon name="bookmark-outline"></ion-icon>
             </div>
             <div className="expanded-post-add-comment-section">
               <p>Add Comment...</p>
               <button>Post</button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default ExpandedPost