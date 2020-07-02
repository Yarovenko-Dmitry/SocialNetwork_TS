import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
  status: string,
  updateStatus: (status: string) =>void
}

export class ProfileStatus extends React.Component<ProfileStatusType> {
  state = {
    editMode: false,
    status: !this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status.toString());
  };

  onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
        status: e.currentTarget.value
      }
    )
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>{this.props.status || 'no STATUS'}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input onChange={this.onStatusChange}
                 onBlur={this.deActivateEditMode}
                 value={this.state.status.toString()}
                 autoFocus={true}/>
        </div>
        }
      </div>
    )
  }
}

