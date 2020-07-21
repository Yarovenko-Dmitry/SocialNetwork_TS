import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type MyPostsType = {
  posts: Array<PostType>,
  addPost: (newPostText: string) => void,
  // updatedNewPostText: (text: string) => void,
  newPostText: string
};

const MyPosts = (props: MyPostsType) => {

  let postsElenments = props.posts
    .map(p =>
      <Post message={p.message} likesCount={p.likesCount}/>
    );

  // let newPostElement = React.createRef<HTMLTextAreaElement>();

  // const addPost = () => {
  //   props.addPost();
  //   // if (newPostElement.current) {
  //   //   props.dispatch(addPostActionCreator());
  //   // }
  // };

  // let onPostChange = () => {
  //   let text = newPostElement.current && newPostElement.current.value;
  //   if (text) {
  //     props.updatedNewPostText(text);
  //     // let action = updateNewPostTextActionCreator(text);
  //     // props.dispatch(action);
  //   }
  // }

  const onAddPost = (values: AddNewPostFormDataType) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElenments}
      </div>
    </div>
  )
}

export type AddNewPostFormDataType = {
  newPostText: string
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'textarea'}
               name={'newPostText'}
               placeholder={'Enter your post'}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostFormRedux = reduxForm<AddNewPostFormDataType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;