import {combineReducers, createStore} from "redux";
import {toDoReducer} from "./todo-reducer";

const reducers = combineReducers({
	toDoPage: toDoReducer,
})

const store = createStore(reducers)

window.store = store
export default store