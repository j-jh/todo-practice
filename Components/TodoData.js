"use client";
import TodoList from "@/Components/TodoList";

import { useState, useEffect } from "react";

export default function TodoData() {
    const [todoObj, setTodoObj] = useState([]);
    useEffect(() => {
        fetchData()
    }, []);

    // delete button?

    async function fetchData() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
            if (!response.ok) {
                console.log("Failed to fetch");
                return;
            }
            const result = await response.json();
            setTodoObj(result);
            console.log(result);
        } catch (error) {
            console.log(error.message);
        }
    };
    console.log("test");

    return (
        <div>
            <TodoList todos={todoObj}/>
        </div>
    );
}