import * as React from "react"

import "./CreditCardForm.scss"
import CreditCard from "../../molecules/CreditCard/CreditCard"
import { useState } from "react"
interface P {}
const CreditCardForm: React.FC<P> = props => {
  const [cardNumber, dispatchCardNumber] = React.useReducer(
    (state: number[], action) => {
      return action
    },
    []
  )

  type DateStateType = "updateMonth" | "updateYear"
  const [date, dispatchDate] = React.useReducer(
    (
      state: { month: number[]; year: number[] },
      action: { type: DateStateType; payload: number[] }
    ) => {
      switch (action.type) {
        case "updateMonth":
          return { year: state.year, month: action.payload }
        case "updateYear":
          return { month: state.month, year: action.payload }
        default:
          return { month: [], year: [] }
      }
    },
    { month: [], year: [] }
  )

  const [name, dispatchName] = React.useReducer(
    (state: string, action: string) => {
      return action
    },
    ""
  )

  const [cwr, dispatchCwr] = React.useReducer(
    (state: number[], action: number[]) => {
      return action
    },
    []
  )
  const [cardIsReverse, setCardIsReverse] = useState(false)

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.split("").map(v => Number(v)) ?? []
    dispatchCardNumber(value)
  }

  const changeMonthHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value.split("").map(v => Number(v)) ?? []
    dispatchDate({ type: "updateMonth", payload: value })
  }

  const changeYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value.split("").map(v => Number(v)) ?? []
    dispatchDate({ type: "updateYear", payload: value })
  }

  const nameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    dispatchName(value)
  }

  const cwrHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.split("").map(v => Number(v)) ?? []
    dispatchCwr(value)
  }

  const focusCwr = (event: React.FocusEvent<HTMLElement>) => {
    console.log(event.currentTarget)

    setCardIsReverse(!cardIsReverse)
  }

  const month = [
    { value: 1, display: "01" },
    { value: 2, display: "02" },
    { value: 3, display: "03" },
    { value: 4, display: "04" },
    { value: 5, display: "05" },
    { value: 6, display: "06" },
    { value: 7, display: "07" },
    { value: 8, display: "08" },
    { value: 9, display: "09" },
    { value: 10, display: "10" },
    { value: 11, display: "11" },
    { value: 12, display: "12" },
  ]

  const year = [
    { value: 20, display: "2020" },
    { value: 21, display: "2021" },
    { value: 22, display: "2022" },
    { value: 23, display: "2023" },
    { value: 24, display: "2024" },
  ]

  return (
    <div className="CreditCardForm">
      <CreditCard
        cardNumber={cardNumber}
        date={date}
        name={name}
        cwr={cwr}
        isReverse={cardIsReverse}
      />
      <form className="CreditCardForm__formArea">
        <div className="CreditCardForm__inputArea">
          <label className="CreditCardForm__label">Card Number</label>
          <input
            type="number"
            onChange={changeHandler}
            className="CreditCardForm__inputCardNumber"
          />
        </div>
        <div className="CreditCardForm__inputArea">
          <label className="CreditCardForm__label">name</label>
          <input type="text" onChange={nameChangeHandler} />
        </div>
        <div className="CreditCardForm__inputArea">
          <label className="CreditCardForm__label">Expires</label>
          <div className="CreditCardForm__dateSelectBox">
            <select
              className="CreditCardForm__select"
              name="month"
              onChange={changeMonthHandler}
            >
              {month.map(m => (
                <option value={m.value}>{m.display}</option>
              ))}
            </select>
            <select
              className="CreditCardForm__select"
              name="year"
              onChange={changeYearHandler}
            >
              {year.map(m => (
                <option value={m.value}>{m.display}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="CreditCardForm__inputArea">
          <label className="CreditCardForm__label">cwr</label>
          <input
            type="number"
            placeholder="cwr"
            onChange={cwrHandler}
            onFocus={focusCwr}
            onBlur={focusCwr}
          />
        </div>
      </form>
    </div>
  )
}
CreditCardForm.defaultProps = {}
export default CreditCardForm
