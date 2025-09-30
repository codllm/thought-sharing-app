import { useContext, useRef } from "react";
import { PostList } from "../STORE/Post-List-Store";

const CreatPost = () => {
  const { addPost } = useContext(PostList);

  const post_id = useRef();
  const post_tittle = useRef();
  const post_content = useRef();
  const post_reaction = useRef();
  const post_tags = useRef();

  const handelOnsubmit = (event) => {
    event.preventDefault();

    const post_id_E = post_id.current.value;
    const post_tittle_E = post_tittle.current.value;
    const post_content_E = post_content.current.value;
    const post_reaction_E = post_reaction.current.value;
    const post_tags_E = post_tags.current.value;

    addPost({
      id: post_id_E,
      title: post_tittle_E,
      content: post_content_E,
      reactions: post_reaction_E,
      tags: post_tags_E.split(" "), // convert string to array
    });

    // Optional: clear form after submission
    post_id.current.value = "";
    post_tittle.current.value = "";
    post_content.current.value = "";
    post_reaction.current.value = "";
    post_tags.current.value = "";
  };

  return (
    <form className="creat_post" onSubmit={handelOnsubmit}>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">User ID</label>
        <input type="text" className="form-control" id="id" placeholder="Enter Your User Id" ref={post_id} />
      </div>

      <div className="mb-3">
        <label htmlFor="tittle" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="tittle" placeholder="How Are You Feeling Today" ref={post_tittle} />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Content</label>
        <textarea rows={3} className="form-control" id="body" placeholder="Tell Us More About It" ref={post_content} />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="text" className="form-control" id="reactions" placeholder="How many people reacted to this post" ref={post_reaction} />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" placeholder="Enter multiple tags separated by space" ref={post_tags} />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  );
};

export default CreatPost;
