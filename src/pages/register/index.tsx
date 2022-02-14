import React, { Component } from 'react'
import { observer } from "mobx-react";
import authStore from "../../store/authStore";
import './style.css'

type Props = {}

type State = {}

class Register extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
         {authStore.texts.map((e)=>(<h1>{e}</h1>))}

        </div>
    )
  }
}

export default observer(Register)