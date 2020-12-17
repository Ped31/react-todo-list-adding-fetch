import React, { useEffect, useState } from "react";
import Todos from "./todos.jsx";
import PropTypes from "prop-types";

function TodoList() {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);

	const inputTextHandler = e => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};

	const submitTodoHandler = e => {
		e.preventDefault();
		setTodos([...todos, { label: inputText, done: false }]);
		setInputText("");
	};

	//2-Obtengo los datos de la API con GET

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Ped31")
			.then(resp => {
				console.log(resp.ok);
				console.log(resp.status);
				console.log(resp);
				return resp.json();
			})
			.then(data => {
				console.log(data);
			})
			.catch(error => {
				//error handling
				console.log(error);
			});
	}, []);

	//3.Añadir y borrar tareas

	useEffect(
		() => {
			fetch("https://assets.breatheco.de/apis/fake/todos/user/PedroR", {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(todos)
			})
				.then(response => response.json())
				.then(data => {
					console.log("updated", data);
				})
				.catch(error => {
					console.error("Error:", error);
				});
		},
		[todos]
	);

	return (
		<div className="todo-list">
			<form>
				<input
					value={inputText}
					onChange={inputTextHandler}
					placeholder="new plan here..."
				/>
				<button
					className="todo-button"
					type="submit"
					onClick={submitTodoHandler}>
					<i className="far fa-plus-square" />
				</button>

				<div className="todo-container">
					<Todos todos={todos} setTodos={setTodos} />
				</div>
			</form>
			<div>
				<div className="counter">{todos.length} pending plans</div>
			</div>
		</div>
	);
}

export default TodoList;
