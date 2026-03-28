import { all } from "redux-saga/effects"
import utilitySaga from "./sagas/utilitySaga"

export default function* rootSaga() {
  yield all([utilitySaga()])
}