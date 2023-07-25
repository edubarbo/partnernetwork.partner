// Dependencies
import { useContext } from 'react'

// State
import { store } from '../../state/store'
import {
  IUpdatePartnerDataFieldPayload,
  UPDATE_PARTNER_DATA,
  UPDATE_PARTNER_DATA_FIELD,
} from '../../state/reducer/index.types'

const usePartnerData = () => {
  const {
    state: { partnerData },
    dispatch,
  } = useContext(store)

  const updateField = ({ field, value }: IUpdatePartnerDataFieldPayload) => {
    dispatch({
      type: UPDATE_PARTNER_DATA_FIELD,
      payload: {
        field,
        value,
      },
    })
  }

  const updateData = (newData: IPartnerData) => {
    dispatch({
      type: UPDATE_PARTNER_DATA,
      payload: newData,
    })
  }

  return {
    partnerData,
    updateField,
    updateData,
  }
}

export default usePartnerData
