// Dependencies
import React, { createContext, useReducer } from 'react'

// Typing
import { State } from './index.types'

// Reducer
import reducer from '../reducer'

const initialState: State = {
  partnerData: {
    id: '',
    email: '',
    // emailTecnico: '',
    // emailMarketing: '',
    // emailFinanceiro: '',
    website: '',
    name: '',
    types: [],
    regions: [],
    imgURL: '',
    description: '',
    status: '',
    maincategory: ''
  },
  clients: [],
  services: [],
}

interface ServiceContext {
  state: State
  dispatch: ReturnType<typeof useReducer>[1]
}

export const store = createContext<ServiceContext>({
  state: initialState,
  dispatch() {},
})

const { Provider } = store

export const StateProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}
