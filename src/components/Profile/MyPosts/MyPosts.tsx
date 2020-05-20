import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";
import {addPostType, updateNewPostTextType} from "../../../redux/state";


type MyPostsType = {
  posts: Array<PostType>,
  addPost: addPostType,
  updateNewPostText: updateNewPostTextType,
  newPostText: string
};

const MyPosts = (props: MyPostsType) => {

  let postsElenments = props.posts
    .map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>
    );

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    if (newPostElement.current) {
      props.addPost();
    }
  };

  let onPostChange = () => {
    let text = newPostElement.current && newPostElement.current.value;
    if (text) {
      props.updateNewPostText(text);
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElenments}
      </div>
    </div>
  )
}

export default MyPosts;