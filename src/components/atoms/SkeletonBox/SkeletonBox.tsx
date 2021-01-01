import * as React from "react"
import classnames from "classnames"

import "./SkeletonBox.scss"

interface P {
  // height: number;
  // width: number;
}
const SkeletonBox: React.FC<P> = props => {
  const classNames = classnames("SkeletonBox", {
    
  })


  return (
    <div className={classNames}>
      {props.children}
    </div>
  )
}

export default SkeletonBox
