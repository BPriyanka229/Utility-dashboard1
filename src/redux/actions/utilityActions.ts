import type { ApiResponse } from "../../types/utilityTypes"

export const FETCH_UTILITY_REQUEST = "FETCH_UTILITY_REQUEST"
export const FETCH_UTILITY_SUCCESS = "FETCH_UTILITY_SUCCESS"
export const FETCH_UTILITY_FAILURE = "FETCH_UTILITY_FAILURE"

export interface FetchUtilityRequestAction {
  type: typeof FETCH_UTILITY_REQUEST
  [key: string]: unknown
}

export interface FetchUtilitySuccessAction {
  type: typeof FETCH_UTILITY_SUCCESS
  payload: ApiResponse
  [key: string]: unknown
}

export interface FetchUtilityFailureAction {
  type: typeof FETCH_UTILITY_FAILURE
  payload: string
  [key: string]: unknown
}

export type UtilityActionTypes =
  | FetchUtilityRequestAction
  | FetchUtilitySuccessAction
  | FetchUtilityFailureAction

export const fetchUtilityRequest = (): FetchUtilityRequestAction => ({
  type: FETCH_UTILITY_REQUEST
})

export const fetchUtilitySuccess = (data: ApiResponse): FetchUtilitySuccessAction => ({
  type: FETCH_UTILITY_SUCCESS,
  payload: data
})

export const fetchUtilityFailure = (error: string): FetchUtilityFailureAction => ({
  type: FETCH_UTILITY_FAILURE,
  payload: error
})