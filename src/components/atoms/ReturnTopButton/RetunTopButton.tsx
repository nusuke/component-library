import * as React from "react"
import classNames from "classnames"

import "./ReturnTopButton.scss"
interface P {
  text: string
  type?: "outline"
  animation?: boolean
  onClickHandler: () => void
}
const ReturnTopButton: React.FC<P> = props => {
  const className = classNames("BasicButton", {
    "ReturnTopButton--animation": props.animation,
    "ReturnTopButton--outline": props.type === "outline",
  })
  return (
    <button className={className} onClick={props.onClickHandler}>
      {props.text}
    </button>
  )
}
ReturnTopButton.defaultProps = {
  animation: false,
}
export default ReturnTopButton
