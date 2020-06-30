import * as React from "react"

import "./Graph.scss"

type GraphDataType = { [year: number]: [{ label: string; data: number }] }
interface P {
  data: GraphDataType
}
const Graph: React.FC<P> = props => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  const [year, setYear] = React.useState(2000)
  const [intervalId, setIntervalId] = React.useState(0)

  const maxYear = Object.keys(props.data)
    .map(m => Number(m))
    .reduce((l, r) => (l < r ? r : l), 0)

  React.useEffect(() => {
    setIntervalId(
      window.setInterval(() => {
        if (year < maxYear) {
          setYear(year + 1)
        }
      }, 1000)
    )

    const context = canvasRef.current.getContext("2d")
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    context.fillText(String(year), 10, 10)

    props.data[year]?.map((d, i) => {
      context.fillText(String(d.label), 20, 40 * (i + 1))
      context.fillRect(20, 40 * (i + 1), d.data, 20)
    })

    context.strokeStyle = "rgb(00,00,255)"
    context.fillStyle = "rgb(255,00,00)"

    return () => {
      clearInterval(intervalId)
    }
  }, [year])
  return <canvas ref={canvasRef}></canvas>
}
export default Graph
