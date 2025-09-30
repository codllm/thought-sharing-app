import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { PostList } from "../STORE/Post-List-Store";


const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (

    <div className="postlist_cintainer" style={{display:"flex"}}>
      <div className="card post">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          <TiDeleteOutline onClick={() => deletePost(post.id)} />
        </span>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag, idx) => (
          <span key={idx} className="badge text-bg-primary hashtag">{tag}</span>
        ))}
      </div>
    </div>
    

    </div>
  );
};

export default Post;
