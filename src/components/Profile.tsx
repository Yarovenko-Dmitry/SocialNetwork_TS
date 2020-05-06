import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div className={s.content}>
      <div><img
        src="https://lh4.googleusercontent.com/proxy/x0kSBZDM2lLD9jxQXJ2TydhhwWn8NHTEVtvtAwKCqMVcuNY4EMDe7c2EfnHm5fbGLBVHxqs8HJbBfKhNEZoAAhDe2YFv6HOPAUIec1KHuT-K4adL"
        alt="img"/>
      </div>
      <div> avatar + discription https://i.pinimg.com/originals/63/2d/6f/632d6f00a809cf8c77f65142395458de.png</div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            post1
          </div>
          <div className={s.item}>
            post2
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;