import React from "react"
import {BoxSoftSkills, Link} from "./styles"


export default function SoftSkills(props) {

  return (
    <Link href={props.href} target="_blank">
      <BoxSoftSkills>
        <img src={props.img} alt={props.label}/>
        <h3>{props.label}</h3>
      </BoxSoftSkills>
    </Link>
  )
}