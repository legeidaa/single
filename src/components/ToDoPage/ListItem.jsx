import React from "react";


export default function ListItem(props) {
	return (

		<li id={props.id} key={props.id}>
			<span>{props.num + '. '}</span>
			{props.item}
			<button onClick={() => { props.removeFromList(props.id)}}>
				X
			</button>
		</li>
	)
}