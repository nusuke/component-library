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
  cwr: number[]
  isReverse?: boolean
}
const CreditCard: React.FC<P> = props => {
  const [isReverse, setIsReverse] = useState(false)
  const defaultMask = new Array(16).fill("#")
  const month =
    props.date.month.length === 1 ? [0, props.date.month] : props.date.month

  const classNames = classnames("CreditCard__front", {
    "CreditCard__front--reverce": isReverse,
  })

  React.useEffect(() => {
    setIsReverse(props.isReverse)
  }, [props.isReverse])

  const clickHandler = () => {
    setIsReverse(!isReverse)
  }

  return (
    <div className="CreditCard">
      <div className={classNames} onClick={clickHandler}>
        <div className="CreditCard__frontCardNumber">
          {props.cardNumber.length > 16 ? (
            <p className="CreditCard__frontCardNumber--error">
              16桁以内で入力してください
            </p>
          ) : (
            defaultMask.map((mask, index) => {
              return (
                <React.Fragment key={index}>
                  <span className="CreditCard__frontCardNumberDisplay">
                    <span
                      className={
                        props.cardNumber?.[index] ||
                        props.cardNumber?.[index] === 0
                          ? `CreditCard__frontCardNumberHiddenRowPart--anim`
                          : `CreditCard__frontCardNumberHiddenRowPart`
                      }
                    >
                      #
                    </span>
                    {props.cardNumber?.[index] ||
                    props.cardNumber?.[index] === 0 ? (
                      <span className="CreditCard__frontCardNumberDisplayRowPart">
                        {props.cardNumber[index]}
                      </span>
                    ) : (
                      <span className="CreditCard__frontCardNumberDisplayRowPart--anim">
                        #
                      </span>
                    )}{" "}
                  </span>
                  {(index + 1) % 4 === 0 && (
                    <span className="CreditCard__frontCardNumberPart--margin">
                      {" "}
                    </span>
                  )}
                </React.Fragment>
              )
            })
          )}
        </div>

        <div className="CreditCard__frontName">
          <label className="CreditCard__frontNameLabel">name</label>
          {props.name && <>{props.name}</>}
        </div>

        <div className="CreditCard__frontDate">
          {month?.[0] ?? "M"}
          {month?.[1] ?? "M"}/{props.date.year?.[0] ?? "D"}
          {props.date.year?.[1] ?? "D"}
        </div>
      </div>

      <div
        onClick={clickHandler}
        className={`CreditCard__back ${
          isReverse && "CreditCard__back--reverse"
        }`}
      >
        <div className="CreditCard__backCwr"> {props.cwr}</div>
      </div>
    </div>
  )
}
CreditCard.defaultProps = {
  isReverse: false,
}
export default CreditCard
