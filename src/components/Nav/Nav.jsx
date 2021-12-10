import React from 'react';
import { NavLink } from 'react-router-dom'


const Nav = () => {
	return (
		<nav className={'navbar'}>
			<div>
				<NavLink to='/todo'>ToDo</NavLink>
			</div>
			<div>
				<NavLink to='/interval-timer'>Interval timer</NavLink>
			</div>
			<div>
				<NavLink to='/2048'>2048</NavLink>
			</div>
		</nav>
	)
}

export default Nav;