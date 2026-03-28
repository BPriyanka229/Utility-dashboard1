import { call, put, takeLatest } from "redux-saga/effects"
import axios from "axios"

import {
  FETCH_UTILITY_REQUEST,
  fetchUtilitySuccess,
  fetchUtilityFailure
} from "../actions/utilityActions"

const API_URL = "https://69c277b27518bf8facbe717b.mockapi.io/api/v1/utility"

async function fetchUtilityApi() {
  const response = await axios.get(API_URL)
  console.log("API RESPONSE:", response.data)
  return response.data[0]
}

function* fetchUtilitySaga(): Generator {
  try {
    const data = yield call(fetchUtilityApi)

    yield put(fetchUtilitySuccess(data))
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(fetchUtilityFailure(error.message))
    } else {
      yield put(fetchUtilityFailure("Something wrong"));
    }

  }
}

export default function* utilitySaga() {
  yield takeLatest(FETCH_UTILITY_REQUEST, fetchUtilitySaga)
}