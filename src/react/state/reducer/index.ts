// Typing
import { State } from '../store/index.types'
import {
  ActionTypes,
  UPDATE_PARTNER_DATA,
  UPDATE_PARTNER_DATA_FIELD,
  ADD_SERVICE,
  ADD_SERVICES,
  UPDATE_SERVICE,
  REMOVE_SERVICE,
  ADD_CLIENT,
  ADD_CLIENTS,
  UPDATE_CLIENT,
  REMOVE_CLIENT,
} from './index.types'

export default (state: State, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_PARTNER_DATA: {
      const { partnerData } = state

      return {
        ...state,
        partnerData: {
          ...partnerData,
          ...action.payload,
        },
      }
    }

    case UPDATE_PARTNER_DATA_FIELD: {
      const { partnerData } = state
      const { field, value } = action.payload

      const newPartnerData = {
        ...partnerData,
        [field]: value,
      }

      return {
        ...state,
        partnerData: newPartnerData,
      }
    }

    case ADD_SERVICE: {
      const { services } = state

      const newService = action.payload

      return {
        ...state,
        services: [...services, newService],
      }
    }

    case ADD_SERVICES: {
      return {
        ...state,
        services: action.payload,
      }
    }

    case UPDATE_SERVICE: {
      const { services } = state

      const newService = action.payload
      const newServices = [...services]

      services.forEach((service, index) => {
        if (service.id === newService.id) {
          newServices[index] = newService
        }
      })

      return {
        ...state,
        services: newServices,
      }
    }

    case REMOVE_SERVICE: {
      const { services } = state

      const { id } = action.payload

      const newServices = services.filter((service) => service.id !== id)

      return {
        ...state,
        services: newServices,
      }
    }

    case ADD_CLIENT: {
      const { clients } = state

      const newClient = action.payload

      return {
        ...state,
        clients: [...clients, newClient],
      }
    }

    case ADD_CLIENTS: {
      return {
        ...state,
        clients: action.payload,
      }
    }

    case UPDATE_CLIENT: {
      const { clients } = state

      const newClient = action.payload
      const newClients = [...clients]

      clients.forEach((client, index) => {
        if (client.id === newClient.id) {
          newClients[index] = newClient
        }
      })

      return {
        ...state,
        clients: newClients,
      }
    }

    case REMOVE_CLIENT: {
      const { clients } = state

      const { id } = action.payload

      const newClients = clients.filter((client) => client.id !== id)

      return {
        ...state,
        clients: newClients,
      }
    }

    default: {
      return state
    }
  }
}
