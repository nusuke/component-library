import * as React from "react"
import classNames from "classnames"

import "./AnimationText.scss"
import { useState } from "react"
interface P {
  text: string
}
const AnimationText: React.FC<P> = props => {
  const [displayText, setDisplayText] = useState("")
  const randomChar = ["-", "A", "B", "x", "y", "P"]

  React.useEffect(() => {
    setDisplayText(props.text)
  }, [])

  const mouseOver = (e: React.MouseEvent) => {
    setDisplayText(
      randomChar[Math.floor(Math.random() * (randomChar.length - 1))]
    )
    let _displayText =
      randomChar[Math.floor(Math.random() * (randomChar.length - 1))]
    const intervalId = setInterval(() => {
      if (_displayText.length > props.text.length) {
        setDisplayText(props.text)
        setTimeout(() => {
          setDisplayText(props.text)
        }, 2000)
      } else {
        _displayText +=
          randomChar[Math.floor(Math.random() * (randomChar.length - 1))]
        setDisplayText(_displayText)
      }
    }, 100)
    setTimeout(() => {
      clearInterval(intervalId)
      setDisplayText(props.text)
    }, 3000)
  }

  return <p onMouseOver={mouseOver}>{displayText}</p>
}

export default AnimationText
