import React, { useContext } from "react"
import ReactDOM from "react-dom"

import { CounterProvider, CounterContext } from "./context"
import { Kostya } from "./kostya"

import "./style.css"

const App: React.FC = () => {
  const { count } = useContext(CounterContext)

  return (
    <div className="container">
      <>
        <div>{count}</div>
        <Kostya name="Alex" />
      </>
    </div>
  )
}

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById("root")
)
