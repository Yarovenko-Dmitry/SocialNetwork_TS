import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div><img
        src="https://lh4.googleusercontent.com/proxy/x0kSBZDM2lLD9jxQXJ2TydhhwWn8NHTEVtvtAwKCqMVcuNY4EMDe7c2EfnHm5fbGLBVHxqs8HJbBfKhNEZoAAhDe2YFv6HOPAUIec1KHuT-K4adL"
        alt="img"/>
      </div>
      <div> avatar + discription </div>
      <MyPosts />
    </div>
  )
}

export default Profile;