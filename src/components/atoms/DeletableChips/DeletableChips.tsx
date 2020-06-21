import * as React from "react"
import classNames from "classnames"

import "./DeletableChips.scss"
interface P {
  text: string
  type?: "error"
  deleteHandler: () => void
}
const DeletableChips: React.FC<P> = props => {
  const className = classNames("DeletableChips", {
    "DeletableChips--error": props?.type === "error",
  })
  return (
    <div className={className}>
      <p className="DeletableChips__text">{props.text}</p>
      <i onClick={props.deleteHandler}>×</i>
    </div>
  )
}
export default DeletableChips
