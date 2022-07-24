import React from "react";
import { Icon  } from "@chakra-ui/react"

// Styles
import { BoxIcons } from "./styles"

export default function HardsSkills(props) {

  return (
    <BoxIcons color={props.item.color}>
      <Icon as={props.item.icon} />
      <h3>{props.item.label}</h3>
    </BoxIcons>
  )
}