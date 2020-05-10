import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {DialogType, MessageType, PostType} from "../../../index";


type MyPostsType = {
  posts: Array<PostType>
};

const MyPosts = (props: MyPostsType) => {

  let postsElenments = props.posts
    .map((p: { message: string; likesCount: number; }) =>
      <Post message={p.message} likesCount={p.likesCount}/>
    );

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElenments}
      </div>
    </div>
  )
}

export default MyPosts;