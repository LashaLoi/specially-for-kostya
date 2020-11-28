import React, { useContext } from "react"

import { CounterContext } from "./context"

type KostyaProps = {
  name: string
}

export const Kostya: React.FC<KostyaProps> = ({ name }) => {
  const { handleIncrement, handleDecrement } = useContext(CounterContext)

  return (
    <>
      {name}
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}
