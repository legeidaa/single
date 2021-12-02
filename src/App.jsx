import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import Todo from './components/ToDoPage/Todo'

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
							<Route path='/todo' element={<Todo />} />
							<Route path='/dialogs' />
						</Routes>
					</div>

				</div>
			</div>
		</BrowserRouter>

	);
}

export default App;
