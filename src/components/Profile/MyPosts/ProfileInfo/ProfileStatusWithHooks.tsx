import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusType = {
  status: string,
  updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

  let [editMode, setEditMode] = useState<boolean>(false);
  let [status, setStatus] = useState<string>(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode &&
      <div>
        <b> Status:</b> <span onDoubleClick={activateEditMode}>{props.status || 'no STATUS'}</span>
      </div>
      }
      {editMode &&
      <div>
        <input autoFocus={true}
               onBlur={deActivateEditMode}
               onChange={onStatusChange}
               value={status}/>
      </div>
      }
    </div>
  )

}

