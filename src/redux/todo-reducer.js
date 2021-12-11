import {nanoid} from "nanoid";

let initialState = {
	toDoColumn: {
		name: 'ToDo',
		key: 'toDoColumn',
		id: nanoid(),
		listItems: [
			{num: 1, id: 112312, value: 'first task'},
			{num: 2, id: 2232342, value: 'second task'},
			{num: 3, id: 3324234, value: 'third task'},
		],
	},
	inProgressColumn: {
		name: 'In progress',
		key: 'inProgressColumn',
		id: nanoid(),
		listItems: [
			{num: 1, id: 165756, value: 'first in progress'},
			{num: 2, id: 265757, value: 'second in progress'},
			{num: 3, id: 356757, value: 'third in progress'},
		],
	},
	doneColumn: {
		name: 'Done',
		key: 'doneColumn',
		id: nanoid(),
		listItems: [
			{num: 1, id: 19877, value: 'first done'},
			{num: 2, id: 27997, value: 'second done'},
			{num: 3, id: 397978, value: 'third done'},
		],
	},
	// lists: [
	// 	{
	// 		name: 'ToDo',
	// 		id: nanoid(),
	// 		listItems: [
	// 			{num: 1, id: 112312, value: 'first task'},
	// 			{num: 2, id: 2232342, value: 'second task'},
	// 			{num: 3, id: 3324234, value: 'third task'},
	// 		],
	// 	},
	// 	{
	// 		name: 'In progress',
	// 		id: nanoid(),
	// 		listItems: [
	// 			{num: 1, id: 165756, value: 'first in progress'},
	// 			{num: 2, id: 265757, value: 'second in progress'},
	// 			{num: 3, id: 356757, value: 'third in progress'},
	// 		],
	// 	},
	// 	{
	// 		name: 'Done',
	// 		id: nanoid(),
	// 		listItems: [
	// 			{num: 1, id: 19877, value: 'first done'},
	// 			{num: 2, id: 27997, value: 'second done'},
	// 			{num: 3, id: 397978, value: 'third done'},
	// 		],
	// 	}
	// ],
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
export const removeFromList = (id, column) => ({type: REMOVE_FROM_LIST, id, column })
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
			let id = nanoid()
			let newItem = {num: state.toDoColumn.listItems.length + 1, id: id, value: state.inputValue}

			if (state.inputValue) {
				debugger
				return {
					...state,
					toDoColumn: {
						...state.toDoColumn,
						listItems: [...state.toDoColumn.listItems, newItem]
					},
					inputValue: '',
				}
			}
			return {
				...state
			}
		}
		case REMOVE_FROM_LIST: {
			console.log(action.column)
			let columnName = action.column.key
			let newList = action.column.listItems


			newList.forEach((item, index, array) => {
				if(item.id === action.id) {
					array.splice(index, 1)
					console.log(array)
					console.log(newList)
					debugger
				}
			})
			debugger
			return ({
				...state,
				[columnName]: {
					...state[columnName],
					listItems: [...newList]
				},
			})
		}
		case SWAP_LIST_ITEMS: {
			const {droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId} = action.payload

			//if same column
			if(droppableIdStart === droppableIdEnd) {
				let list = null;
				for (let key in state) {
					let stateList = state[key];
					if (stateList.id === droppableIdStart) {
						list = stateList
					}
				}
				console.log(list)
				const listItem = list.listItems.splice(droppableIndexStart, 1)
				debugger
				list.listItems.splice(droppableIndexEnd, 0, ...listItem)
			}

			if(droppableIdStart !== droppableIdEnd) {
				let listStart = null
				let listEnd = null
				for (let key in state) {
					let stateList = state[key];
					if (stateList.id === droppableIdStart) {
						listStart = stateList
					} else if (stateList.id === droppableIdEnd) {
						listEnd = stateList
					}
				}

				const listItem = listStart.listItems.splice(droppableIndexStart, 1)
				listEnd.listItems.splice(droppableIndexEnd, 0, ...listItem)
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
