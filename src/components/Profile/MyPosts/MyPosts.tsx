import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";
import {addPostType} from "../../../redux/state";


type MyPostsType = {
  posts: Array<PostType>,
  addPost: addPostType
};

const MyPosts = (props: MyPostsType) => {


  let postsElenments = props.posts
    .map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>
    );

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    if(newPostElement.current) {
      let text = newPostElement.current.value;
      props.addPost(text);
    }
    // let bbb  = newPostElement.current && newPostElement.current.value;

  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
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