import { useEffect, useState } from "react"
import Post from "./Post"
import ExpandedPost from "./ExpandedPost";
const PostSection =() => {
const [postArr, setPostArr] = useState([])
const [isExpanded, setIsExpanded] = useState(false)
const [expandedId, setExpandedId] =useState()
useEffect(()=> {
const getPosts = async() => {
let req = await fetch("http://localhost:3000/posts");
let res = await req.json()
return setPostArr(res)
}

getPosts()
}, [])

const handleExpanded = () => {
   return(
    postArr.map((element) => {
        if (isExpanded){ 
            if (expandedId === element.id){
                return (
                  <ExpandedPost
                    key={element.id}
                    id={element.id}
                    user={element.user}
                    content={element.content}
                    caption={element.caption}
                    likes={element.likes}
                    comments={element.comments}
                  />
                );
            }
        }else {
      return (
        <Post
          key={element.id}
          id={element.id}
          user={element.user}
          content={element.content}
          caption={element.caption}
          likes={element.likes}
          comments={element.comments}
          setIsExpanded={setIsExpanded}
          setExpandedId={setExpandedId}
        />
      );
    }})
   )
}
console.log(expandedId)
    
return (
    <div className="post-section">
    {
    handleExpanded()
    }
    </div>
)
}

export default PostSection


//<ExpandedPost user={user} content={content} caption={likes} comments={comments} id={id} />


