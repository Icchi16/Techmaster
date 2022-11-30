export const INCREMENT = "counter/increment"
export const DECREMENT = "counter/decrement"
export const RESET = "counter/reset"

export const increment = () => ({type: INCREMENT})
export const decrement = () => ({type: DECREMENT})
export const reset = () => ({type: RESET})