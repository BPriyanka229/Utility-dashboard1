import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import utilityReducer from "./reducers/utilityReducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  utilityReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch