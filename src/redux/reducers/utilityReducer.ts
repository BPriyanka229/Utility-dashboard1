import {
  FETCH_UTILITY_REQUEST,
  FETCH_UTILITY_SUCCESS,
  FETCH_UTILITY_FAILURE
} from "../actions/utilityActions"

import type { UtilityActionTypes } from "../../redux/actions/utilityActions"
import type { ApiResponse } from "../../types/utilityTypes"

interface UtilityState {
  loading: boolean
  data: ApiResponse | null
  error: string | null
}

const initialState: UtilityState = {
  loading: false,
  data: null,
  error: null
}

const utilityReducer = (state: UtilityState = initialState, action: UtilityActionTypes
): UtilityState => {
  switch (action.type) {

    case FETCH_UTILITY_REQUEST:
      return {
        ...state,
        loading: true
      }

    case FETCH_UTILITY_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null
      }

    case FETCH_UTILITY_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload
      }

    default:
      return state
  }
}

export default utilityReducer