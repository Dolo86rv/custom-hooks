import { useState } from "react"

export const useCounter =(initialValue = 10 ) =>{
    
    const [iscounter, setCounter] = useState(initialValue)

    const increment = ( value = 1) => {
        setCounter((current) => current + value)
    }

    const decrement = (value = 1) => {
        if(iscounter === 0) return
        
        setCounter((current) => current - value)
    }

    const reset = () => {
        setCounter(initialValue)
    }
    
    return {
        iscounter, 
        increment, 
        decrement,
        reset
    }
}