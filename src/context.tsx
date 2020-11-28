import React, { createContext, useState } from "react"

export const CounterContext = createContext({
  count: 0,
  handleIncrement: () => {},
  handleDecrement: () => {}
})

export const CounterProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => setCount(state => state + 1)
  const handleDecrement = () => setCount(state => state - 1)

  return (
    <CounterContext.Provider value={{ count, handleDecrement, handleIncrement }}>{children}</CounterContext.Provider>
  )
}
