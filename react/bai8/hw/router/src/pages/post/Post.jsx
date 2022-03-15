import {useParams} from "react-router-dom"
import posts from "../../post";

const Post = () =>{
  const params = useParams();

  const post = posts.filter(item => item.id === params.postId)[0];
    return <div>
      <img src={post.thumbnail} alt={post.title} />
      <div>{post.title}</div>

      <div>{post.content}</div>
    </div> 
    
  }
  export default Post