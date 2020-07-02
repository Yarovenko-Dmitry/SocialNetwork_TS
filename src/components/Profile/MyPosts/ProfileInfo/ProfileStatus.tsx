import React from "react";
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
  status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    title: 'Hi, my friend'
  }

  activateEditMode () {
    this.setState({
      editMode: true
    })
  }

  deActivateEditMode () {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input onBlur={this.deActivateEditMode.bind(this)} value={this.props.status} autoFocus={true}/>
        </div>
        }
      </div>
    )
  }
}

