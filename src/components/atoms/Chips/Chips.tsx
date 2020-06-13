import * as React from "react"
import classNames from "classnames"

import "./Chips.scss"
interface P {
  text: string
}
const Chips: React.FC<P> = props => {
  const className = classNames("Chips", {})
  return <div className={className}>{props.text}</div>
}
export default Chips
