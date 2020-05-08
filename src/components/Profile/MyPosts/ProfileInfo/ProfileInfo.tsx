import React from "react";
import s from './ProfileInfo.module.css'

export const ProfileInfo = () => {
  return (
    <div>
      <div><img
        src="https://lh4.googleusercontent.com/proxy/x0kSBZDM2lLD9jxQXJ2TydhhwWn8NHTEVtvtAwKCqMVcuNY4EMDe7c2EfnHm5fbGLBVHxqs8HJbBfKhNEZoAAhDe2YFv6HOPAUIec1KHuT-K4adL"
        alt="img"/>
      </div>
      <div className={s.descriptionBlock}>
        avatar + discription
      </div>
    </div>
  )
};