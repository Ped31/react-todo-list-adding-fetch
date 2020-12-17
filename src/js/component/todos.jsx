import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Todos(props) {
	const deleteHandler = key => {
		const updatedList = props.todos.filter(todoObj => {
			return todoObj.label != key;
		});
		props.setTodos(updatedList);
	};
	return (
		<div>
			{props.todos.map((todoObj, index) => {
				if (todoObj.label != "") {
					return (
						<div key={index} className="container">
							<p>{todoObj.label}</p>
							<button
								className="buttonDeleteTask"
								onClick={() => deleteHandler(todoObj.label)}>
								<i className="far fa-trash-alt" />
							</button>
						</div>
					);
				}
			})}
		</div>
	);
}

Todos.propTypes = {
	todos: PropTypes.array,
	setTodos: PropTypes.func
};

export default Todos;
