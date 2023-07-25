// Dependencies
import { useContext } from 'react'

// State
import { store } from '../../state/store'
import {
  ADD_SERVICE,
  ADD_SERVICES,
  UPDATE_SERVICE,
  REMOVE_SERVICE,
} from '../../state/reducer/index.types'

const usePartnerServices = () => {
  const {
    state: { services },
    dispatch,
  } = useContext(store)

  const addService = (newService: IServiceItem) => {
    dispatch({
      type: ADD_SERVICE,
      payload: newService,
    })
  }

  const addServices = (newServices: IServiceItem[]) => {
    dispatch({
      type: ADD_SERVICES,
      payload: newServices,
    })
  }

  const updateService = (newService: IServiceItem) => {
    dispatch({
      type: UPDATE_SERVICE,
      payload: newService,
    })
  }

  const removeService = (id: IServiceItem['id']) => {
    dispatch({
      type: REMOVE_SERVICE,
      payload: {
        id,
      },
    })
  }

  return {
    services,
    addService,
    addServices,
    updateService,
    removeService,
  }
}

export default usePartnerServices
