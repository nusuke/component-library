import * as React from "react"

import "./CreditCard.scss"
interface P {
  cardNumber: number[]
  date: {
    month: number[]
    year: number[]
  }
}
const CreditCard: React.FC<P> = props => {
  const defaultMask = new Array(16).fill("#")
  const month =
    props.date.month.length === 1 ? [0, props.date.month] : props.date.month

  return (
    <div className="CreditCard">
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
                  <span className="CreditCard__cardNumberPart--margin"> </span>
                )}
              </React.Fragment>
            )
          })
        )}
      </div>

      <div className="CreditCard__date">
        {month?.[0] ?? "M"}
        {month?.[1] ?? "M"}/{props.date.year?.[0] ?? "D"}
        {props.date.year?.[1] ?? "D"}
      </div>
    </div>
  )
}
CreditCard.defaultProps = {}
export default CreditCard
