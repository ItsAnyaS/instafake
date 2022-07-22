import { useEffect, useState } from "react"
import Post from "./Post"
const PostSection =() => {
const [postArr, setPostArr] = useState([])
useEffect(()=> {
const getPosts = async() => {
let req = await fetch("http://localhost:3000/posts");
let res = await req.json()
return setPostArr(res)
}

getPosts()
}, [])
    
return (
    <div className="post-section">
    {postArr.map(element => {
        return (<Post key={element.id} id={element.id}user={element.user} content={element.content} caption={element.caption} likes={element.likes} comments={element.comments}/>)
    })}
    </div>
)
}

export default PostSection

