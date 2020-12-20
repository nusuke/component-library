import * as React from "react"
import classnames from "classnames"

import "./ReverseCard.scss"
import { useState } from "react"
interface P {
  frontComponent: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<Element>,
    Element
  >
  backComponent: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<Element>,
    Element
  >
}
const ReverseCard: React.FC<P> = props => {
  const [isReverse, setIsReverse] = useState(false)
  const classNames = classnames("ReverseCard", {
    "ReverseCard--reverse": isReverse,
  })
  const reverse = () => {
    setIsReverse(!isReverse)
  }

  return (
    <div className={classNames} onClick={reverse}>
      <div className="ReverseCard__front">{props.frontComponent}</div>
      <div className="ReverseCard__back">{props.backComponent}</div>
    </div>
  )
}

export default ReverseCard
