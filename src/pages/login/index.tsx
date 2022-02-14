import React, { Component } from 'react'
import { observer } from "mobx-react";
import authStore from "../../store/authStore";
import './style.css'

type Props = {}

type State = {}

class Login extends Component<Props, State> {
    state = {inp:""}

    updateUser = () => {
        authStore.addText(this.state.inp);
        this.setState({inp:""})
    }

    render() {
        return (
            <div>
                <input placeholder="text" value={this.state.inp} onChange={e => { this.setState({inp:e.target.value}) }}></input>
                <button onClick={() => this.updateUser()}>Add</button>
            </div>
        )
    }
}

export default observer(Login)