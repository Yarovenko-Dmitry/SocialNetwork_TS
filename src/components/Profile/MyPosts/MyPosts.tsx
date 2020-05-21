import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";
import {DispatchType, AddPostActionType, onPostChangeActionType} from "../../../redux/state";


type MyPostsType = {
  posts: Array<PostType>,
  newPostText: string,
  dispatch: DispatchType
};

const MyPosts = (props: MyPostsType) => {

  let postsElenments = props.posts
    .map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>
    );

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    if (newPostElement.current) {
      let action: AddPostActionType = {type: 'ADD-POST'};
      props.dispatch(action);
    }
  };

  let onPostChange = () => {
    let text = newPostElement.current && newPostElement.current.value;
    if (text) {
      let action: onPostChangeActionType = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
      props.dispatch(action);
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