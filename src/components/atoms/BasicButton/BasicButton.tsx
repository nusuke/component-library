import * as React from "react"
import classNames from "classnames"

import "./BasicButton.scss"
interface P {
  text: string
  type?: "outline"
  animation?: boolean
  onClickHandler: () => void
}
const BasicButton: React.FC<P> = props => {
  const className = classNames("BasicButton", {
    "BasicButton--animation": props.animation,
    "BasicButton--outline": props.type === "outline",
  })
  return (
    <button className={className} onClick={props.onClickHandler}>
      {props.text}
    </button>
  )
}
BasicButton.defaultProps = {
  animation: false,
}
export default BasicButton
