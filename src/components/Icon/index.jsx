import React from "react"
import IcoMoon, { iconList } from "react-icomoon"
import iconSet from "./selection.json"

const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />

console.log(iconList(iconSet))
export default Icon
