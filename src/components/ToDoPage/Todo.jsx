import React from "react";
import ListItem from "./ListItem";


const Todo = (props) => {
	let listItems = props.listItems.map(item => {
		return <ListItem key={item + Math.random() * 100} item={item}/>
	})

	return (
		<div>
			<ul>
				{listItems}
			</ul>
			<input type="text" onChange={props.onInputChange} value={props.inputValue} placeholder="Input task"/>
			<button onClick={props.addToList}>Add task</button>
		</div>
	)
}

export default Todo