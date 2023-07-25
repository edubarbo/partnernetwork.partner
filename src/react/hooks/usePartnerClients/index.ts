// Dependencies
import { useContext } from 'react'

// State
import { store } from '../../state/store'
import {
  ADD_CLIENT,
  ADD_CLIENTS,
  UPDATE_CLIENT,
  REMOVE_CLIENT,
} from '../../state/reducer/index.types'

const usePartnerClients = () => {
  const {
    state: { clients },
    dispatch,
  } = useContext(store)

  const addClient = (newClient: IClientItem) => {
    dispatch({
      type: ADD_CLIENT,
      payload: newClient,
    })
  }

  const addClients = (newClients: IClientItem[]) => {
    dispatch({
      type: ADD_CLIENTS,
      payload: newClients,
    })
  }

  const updateClient = (newClient: IClientItem) => {
    dispatch({
      type: UPDATE_CLIENT,
      payload: newClient,
    })
  }

  const removeClient = (id: IClientItem['id']) => {
    dispatch({
      type: REMOVE_CLIENT,
      payload: {
        id,
      },
    })
  }

  return {
    clients,
    addClient,
    addClients,
    updateClient,
    removeClient,
  }
}

export default usePartnerClients
