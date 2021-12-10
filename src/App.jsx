import logo from './logo.svg';
import React from 'react';
import './App.css';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Todo from './components/ToDoPage/Todo'
import TodoContainer from "./components/ToDoPage/TodoContainer";

//сделать вложенность рутов

function App(props) {

	return (
		<BrowserRouter>
			<div className='container'>
				<div className="app">
					<Nav />
					<div className='app__main'>
						{/*<Route path="/dialogs" component={Dialogs}/>*/}
						{/* <Route path="/profile" component={Profile} /> */}
						<Routes>
							<Route path='/todo' element={<TodoContainer />} />
							<Route path='/interval-timer' />
							<Route path='/2048' />
						</Routes>
					</div>

				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
