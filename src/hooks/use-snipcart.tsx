//@ts-nocheck

import { useState, createContext, useContext, useEffect } from 'react'

export const SnipcartContext = createContext()

export const SnipcartProvider = ({ children }) => {
  const snipcart = useSnipcartState()
  return (
    <SnipcartContext.Provider value={snipcart}>
      {children}
    </SnipcartContext.Provider>
  )
}

export const useSnipcartState = () => {
  const [state, setState] = useState({})

  useEffect(() => {
    let unsubscribe

    const pollToSubscribe = () => {
      if (!window.Snipcart) {
        setTimeout(() => {
          pollToSubscribe()
        }, 100)
        return
      }

      unsubscribe = window.Snipcart.store.subscribe(() => {
        const snipcartState = window.Snipcart.store.getState()
        setState(snipcartState)
      })
    }

    pollToSubscribe()

    return () => {
      if (unsubscribe) unsubscribe()
    }
  }, [])

  return {
    ...state,
  }
}

export const useSnipcart = () => {
  const snipcart = useContext(SnipcartContext)
  return {
    ...snipcart,
  }
}
