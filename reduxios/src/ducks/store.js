import { createStore, applyMiddleware } from "redux";
import {reducer} from './reducer'
import promiseMiddleware  from "redux-promise-middleware";

var store = createStore(
 reducer,
 applyMiddleware(promiseMiddleware)
)

export default store
