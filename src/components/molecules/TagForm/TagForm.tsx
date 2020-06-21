import * as React from "react"
import classNames from "classnames"

import "./TagForm.scss"
import DeletableChips from "../../atoms/DeletableChips/DeletableChips"
import { useRef, useState } from "react"
interface P {
  chipsList: string[]
  appendChips: (chipsText: string) => void
}
const TagForm: React.FC<P> = props => {
  const tagFormWidth = 800
  const className = classNames("TagForm", {})
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const chipsAreaRef = useRef<HTMLDivElement>(null)
  const [errorMessages, setErrorMessages] = useState([])
  const [textAreaWidth, setTextAreaWidth] = useState(
    tagFormWidth - (chipsAreaRef.current?.scrollWidth ?? 0)
  )

  const appendTag = newTagText => {
    props.appendChips(newTagText)
    textAreaRef.current.value = ""
  }

  const changeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputText = event.currentTarget.value

    setTextAreaWidth(tagFormWidth - (chipsAreaRef.current?.scrollWidth ?? 0))
    if (inputText.length > 20) {
      setErrorMessages(["20文字以上は登録できません"])
    } else if (!inputText.match(/^\s+$/) && inputText.match(/\s|\n/)) {
      appendTag(inputText)
    }
  }

  return (
    <>
      <div className={className} style={{ width: `${tagFormWidth}px` }}>
        <div className="TagForm__chipsArea">
          {props.chipsList.map((chipsText, index) => (
            <DeletableChips
              key={index}
              text={chipsText}
              type={
                props.chipsList.filter(f => f === chipsText).length > 1
                  ? "error"
                  : undefined
              }
              deleteHandler={() => {
                alert("delete")
              }}
            />
          ))}
        </div>
        <textarea
          ref={textAreaRef}
          onChange={changeHandler}
          className="TagForm__textArea"
          rows={1}
          style={{ width: `${textAreaWidth}px` }}
        />
      </div>
      {errorMessages.length > 0 &&
        errorMessages.map((message, i) => (
          <p className="TagForm__error" key={i}>
            {message}
          </p>
        ))}
    </>
  )
}
export default TagForm
