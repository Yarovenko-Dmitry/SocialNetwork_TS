import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/store";
import StoreContext from "../../../StoreContext";

export type MyPostsContainerType = {
  store: StoreType
};

const MyPostsContainer = (props: any) => {

  return (
    <StoreContext.Consumer>
      {
        store => {
          // // @ts-ignore
          // if(store&&store.getState()){
          //   let state =store&&store.getState();
          // }

            let state =store.getState();


          const addPost = () => {
            store.dispatch(addPostActionCreator());
          };

          const onPostChange = (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            store.dispatch(action);
          }
          return (
            <MyPosts updatedNewPostText={onPostChange}
                     addPost={addPost}
                     posts={store.getState().profilePage.posts}
                     newPostText={store.getState().profilePage.newPostText}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;