import React from "react"
import {BoxSoftSkills} from "./styles"


export default function SoftSkills(props) {

  return (
    <BoxSoftSkills>
      <img src={props.img} alt={props.label}/>
      <h3>{props.label}</h3>
    </BoxSoftSkills>

  )
}