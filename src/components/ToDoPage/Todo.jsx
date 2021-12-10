import React from "react";
import ListItem from "./ListItem";
import {removeFromList} from "../../redux/todo-reducer";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";


const Todo = (props) => {

	let onDragEnd = (result) => {
		console.log(result)
		const {destination, source, draggableId} = result
		if (!destination) {
			return;
		}
		//droppableIdStart,droppableIdEnd,droppableIndexStart,droppableIndexEnd, draggableId
		props.swapListItems(source.droppableId, destination.droppableId, source.index, destination.index, draggableId)
	}
	return (
		<div className={'todo'}>

			<div className={'todo__wrap'}>
				<DragDropContext onDragEnd={onDragEnd}>
					<ToDoList column={props.toDoColumn}/>
					<ToDoList column={props.inProgressColumn}/>
					<ToDoList column={props.doneColumn}/>
				</DragDropContext>
			</div>
			<h2>Add a task</h2>
			<textarea onChange={props.onInputChange} value={props.inputValue} placeholder="..."/>
			<button onClick={props.addToList}>Add</button>
		</div>
	)
}

export const ToDoList = (props) => {

	return (
		<div>
			<h2>{props.column.name}</h2>
			<ul>
				<Droppable droppableId={props.column.id}>
					{
						(provided, snapshot)=> (
							<div {...provided.droppableProps} ref={provided.innerRef} >
								<ListItems column={props.column}/>
								{provided.placeholder}
							</div>
						)
					}
				</Droppable>
			</ul>
		</div>
	)
}

export const ListItems = (props) => {
	return (
		props.column.listItems.map((item, index) => {
			return (
				<Draggable key={item.id}
						   draggableId={String(item.id)}
						   index={index}
				>
					{provided => (
						<div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
							<li id={item.id} >
								<span>{item.num + '.  '}</span>
								{item.value}
								<button onClick={() => { props.removeFromList(item.id)}}>
									X
								</button>
							</li>
						</div>
					)}
				</Draggable>
			)
		})
	)
}

export default Todo