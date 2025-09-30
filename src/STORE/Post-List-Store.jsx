import { useReducer, createContext } from "react"; // remove 'act'

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currPostList, action) => {
  if (action.type === "ADD_POST") return [action.payload, ...currPostList];
  if (action.type === "DELETE_POST") return currPostList.filter(post => post.id !== action.payload.Postid);
  if (action.type === "server_post") return [...currPostList, ...action.payload];
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = ({ userId, title, content, tags, reactions }) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(),
        userId,
        title,
        content,
        tags: Array.isArray(tags) ? tags : tags.split(" "),
        reactions,
      },
    });
  };

  const deletePost = (Postid) => {
    dispatchPostList({ type: "DELETE_POST", payload: { Postid } });
  };

  const addServerPost = (serverPostDataArray) => {
    const formattedPosts = serverPostDataArray.map(post => ({
      id: Date.now().toString() + Math.random(),
      userId: post.userId,
      title: post.title,
      content: post.body,
      tags: post.tags,
      reactions: post.reactions
    }));

    dispatchPostList({ type: "server_post", payload: formattedPosts });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost, addServerPost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
