import { useContext } from "react";
import Post from "./Post";
import { PostList } from "../STORE/Post-List-Store";
import Nopost from "./Nopost";
import { useEffect } from "react";

const PostListt = ({ ftechFromServer }) => {
  const { postList, addServerPost } = useContext(PostList);

  
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => addServerPost(data.posts))
      .catch(err => console.error(err));
      
  },[])
    
  

  return (
    <>
      { postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostListt;
