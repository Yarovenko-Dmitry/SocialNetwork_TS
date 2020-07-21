import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";

type MyPostsType = {
  posts: Array<PostType>,
  addPost: () => void,
  updatedNewPostText: (text: string) => void,
  newPostText: string
};

const MyPosts = (props: MyPostsType) => {

  let postsElenments = props.posts
    .map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>
    );

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    props.addPost();
    // if (newPostElement.current) {
    //   props.dispatch(addPostActionCreator());
    // }
  };

  let onPostChange = () => {
    let text = newPostElement.current && newPostElement.current.value;
    if (text) {
      props.updatedNewPostText(text);
      // let action = updateNewPostTextActionCreator(text);
      // props.dispatch(action);
    }
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText}
          />
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