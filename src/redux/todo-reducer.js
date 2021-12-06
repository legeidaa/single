

let initialState = {
	listItems: [],
	inputValue: ''
}

//actions
const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE'
const ADD_TO_LIST = 'ADD_TO_LIST'

//action creators. Вызов этой функции нужно передавать как аргумент в dispatch, а в actionCreator передавать необходимое значение (value)
export const changeValue = (inputValue) => {
	return {
		type: CHANGE_INPUT_VALUE,
		inputValue
	}
}
export const addToList = (item) => ({type: ADD_TO_LIST, item })

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
			return {
				...state,
				listItems: [...state.listItems, state.inputValue],
				inputValue: '',
			}
		}
		default:
			return state
	}
}

//Функция dispatch передаёт текущее состояние и передает действие через редьюсер, который мы определили при инициализации. Затем она перезаписывает старое состояние новым состоянием.
//store.dispatch(action_1AC("Some value"));
