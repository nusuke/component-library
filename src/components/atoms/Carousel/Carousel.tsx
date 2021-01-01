import * as React from "react"
import classnames from "classnames"

import "./Carousel.scss"

interface P {
  // height: number;
  // width: number;
}
const Carousel: React.FC<P> = props => {
  const classNames = classnames("Carousel", {
    
  })


  return (
    <ul className={classNames}>
      {props.children}
    </ul>
  )
}

// Carousel.defaultProps = {
//   width: 300,
//   height: 100
// }
export default Carousel
