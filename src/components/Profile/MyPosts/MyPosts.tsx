import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../index";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

type MyPostsType = {
  posts: Array<PostType>,
  addPost: (newPostText: string) => void,
  newPostText: string
};

const MyPosts = React.memo((props: MyPostsType) => {

  let postsElenments = props.posts.map(p =>
    <Post message={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

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
});

export type AddNewPostFormDataType = {
  newPostText: string
}

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name={'newPostText'}
               placeholder={'Enter your post'}
               validate={[required, maxLength10]}
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