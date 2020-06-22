import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import {AddProfileType} from "../../Profile";

export const ProfileInfo = (props: AddProfileType) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <div><img
        src="https://lh4.googleusercontent.com/proxy/x0kSBZDM2lLD9jxQXJ2TydhhwWn8NHTEVtvtAwKCqMVcuNY4EMDe7c2EfnHm5fbGLBVHxqs8HJbBfKhNEZoAAhDe2YFv6HOPAUIec1KHuT-K4adL"
      />
      </div>
      <div className={s.descriptionBlock}>
        {
          props.profile.photos.large ? <img src={props.profile.photos.large}/>: null
        }
        avatar + discription
      </div>
    </div>
  )
};