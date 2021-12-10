import {nanoid} from "nanoid";

let initialState = {
	// toDoColumn: {
	// 	name: 'ToDo',
	// 	id: nanoid(),
	// 	listItems: [
	// 		{num: 1, id: 112312, value: 'first task'},
	// 		{num: 2, id: 2232342, value: 'second task'},
	// 		{num: 3, id: 3324234, value: 'third task'},
	// 	],
	// },
	// inProgressColumn: {
	// 	name: 'In progress',
	// 	id: nanoid(),
	// 	listItems: [
	// 		{num: 1, id: 165756, value: 'first in progress'},
	// 		{num: 2, id: 265757, value: 'second in progress'},
	// 		{num: 3, id: 356757, value: 'third in progress'},
	// 	],
	// },
	// doneColumn: {
	// 	name: 'Done',
	// 	id: nanoid(),
	// 	listItems: [
	// 		{num: 1, id: 19877, value: 'first done'},
	// 		{num: 2, id: 27997, value: 'second done'},
	// 		{num: 3, id: 397978, value: 'third done'},
	// 	],
	// }
	lists: [
		{
			name: 'ToDo',
			id: nanoid(),
			listItems: [
				{num: 1, id: 112312, value: 'first task'},
				{num: 2, id: 2232342, value: 'second task'},
				{num: 3, id: 3324234, value: 'third task'},
			],
		},
		{
			name: 'In progress',
			id: nanoid(),
			listItems: [
				{num: 1, id: 165756, value: 'first in progress'},
				{num: 2, id: 265757, value: 'second in progress'},
				{num: 3, id: 356757, value: 'third in progress'},
			],
		},
		{
			name: 'Done',
			id: nanoid(),
			listItems: [
				{num: 1, id: 19877, value: 'first done'},
				{num: 2, id: 27997, value: 'second done'},
				{num: 3, id: 397978, value: 'third done'},
			],
		}
	],
	inputValue: '',
}

//actions
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const ADD_TO_LIST = 'ADD_TO_LIST'
const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'
const SWAP_LIST_ITEMS = 'SWAP_LIST_ITEMS'

//action creators. Вызов этой функции нужно передавать как аргумент в dispatch, а в actionCreator передавать необходимое значение (value)
export const changeValue = (inputValue) => ( {type: CHANGE_INPUT_VALUE,inputValue})
export const addToList = (item) => ({type: ADD_TO_LIST, item })
export const removeFromList = (id) => ({type: REMOVE_FROM_LIST, id })
export const sort = (droppableIdStart,droppableIdEnd,droppableIndexStart,droppableIndexEnd, draggableId) => (
	{
		type: SWAP_LIST_ITEMS,
		payload: {
			droppableIdStart,
			droppableIdEnd,
			droppableIndexStart,
			droppableIndexEnd,
			draggableId,
		}
	}
)

//reducer — чистая функция которая будет отвечать за обновление состояния. Функция принимает значение текущего состояния и обьект события (action)
export const toDoReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_INPUT_VALUE: {
			return {
				...state,
				inputValue: action.inputValue
			}
		}
		case ADD_TO_LIST: {
			// let id = nanoid()
			// let newItem = {num: state.toDoColumn.listItems.length + 1, id: id, value: state.inputValue}
			//
			// if (state.inputValue) {
			// 	return {
			// 		...state,
			// 		toDoColumn: {
			// 			...state.toDoColumn,
			// 			listItems: [...state.toDoColumn.listItems, newItem]
			// 		},
			// 		inputValue: '',
			// 	}
			// }
			// return {
			// 	...state
			// }
		}
		case REMOVE_FROM_LIST: {
			//поменять тут значения
			// return {
			// 	...state,
			// 	toDoColumn: state.toDoColumn.filter(item => item.id !== action.id)
			// }
		}
		case SWAP_LIST_ITEMS: {
			const {droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId} = action.payload
			//same list
			if(droppableIdStart === droppableIdEnd) {
				debugger
				const list = state.lists.find(list => droppableIdStart === list.id)
			}
			return {
				...state,
			}
		}
		default:
			return state
	}
}

//Функция dispatch передаёт текущее состояние и передает действие через редьюсер, который мы определили при инициализации. Затем она перезаписывает старое состояние новым состоянием.
//store.dispatch(action_1AC("Some value"));
