import React, { useEffect, useState } from "react";
import TodoList from "./todolist.jsx";
import PropTypes from "prop-types";
import "../../styles/index.scss";

export function Home() {
	////1-Primero creo un lista con POST y mi usuario
	//solo renderiza la primera vez que carga
	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/PedroR", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify([])
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	}, []);

	return (
		<div className="App text-center">
			<h1>Any plan for today, mate?</h1>
			<TodoList />
		</div>
	);
}
