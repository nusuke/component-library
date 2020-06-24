import * as React from "react"

import "./CreditCard.scss"
import { useState } from "react"
import classnames from "classnames"
interface P {
  cardNumber: number[]
  date: {
    month: number[]
    year: number[]
  }
  name?: string
}
const CreditCard: React.FC<P> = props => {
  const [isReverse, setIsReverse] = useState(false)
  const defaultMask = new Array(16).fill("#")
  const month =
    props.date.month.length === 1 ? [0, props.date.month] : props.date.month

  const classNames = classnames("CreditCard", {
    "CreditCard--reverce": isReverse,
  })

  const clickHandler = () => {
    setIsReverse(!isReverse)
  }

  const cardRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    console.log(cardRef.current)
  }, [isReverse])

  return (
    <div className="Card">
      <div className={classNames} onClick={clickHandler} ref={cardRef}>
        <div className="CreditCard__cardNumber">
          {props.cardNumber.length > 16 ? (
            <p className="CreditCard__cardNumber--error">
              16桁以内で入力してください
            </p>
          ) : (
            defaultMask.map((mask, index) => {
              return (
                <React.Fragment key={index}>
                  <span className="CreditCard__cardNumberDisplay">
                    <span
                      className={
                        props.cardNumber?.[index] ||
                        props.cardNumber?.[index] === 0
                          ? `CreditCard__cardNumberHiddenRowPart--anim`
                          : `CreditCard__cardNumberHiddenRowPart`
                      }
                    >
                      #
                    </span>
                    {props.cardNumber?.[index] ||
                    props.cardNumber?.[index] === 0 ? (
                      <span className="CreditCard__cardNumberDisplayRowPart">
                        {props.cardNumber[index]}
                      </span>
                    ) : (
                      <span className="CreditCard__cardNumberDisplayRowPart--anim">
                        #
                      </span>
                    )}{" "}
                  </span>
                  {(index + 1) % 4 === 0 && (
                    <span className="CreditCard__cardNumberPart--margin">
                      {" "}
                    </span>
                  )}
                </React.Fragment>
              )
            })
          )}
        </div>

        <div className="CreditCard__name">
          <label className="CreditCard__nameLabel">name</label>
          {props.name && <>{props.name}</>}
        </div>

        <div className="CreditCard__date">
          {month?.[0] ?? "M"}
          {month?.[1] ?? "M"}/{props.date.year?.[0] ?? "D"}
          {props.date.year?.[1] ?? "D"}
        </div>
      </div>

      <div
        onClick={clickHandler}
        className={`CreditCard CreditCard--reverseDisplay ${
          isReverse && "CreditCard--reverseDisplay--reverce"
        }`}
      >
        aaaaaa
      </div>
    </div>
  )
}
CreditCard.defaultProps = {}
export default CreditCard
