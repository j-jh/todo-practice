"use client";
import TodoList from "@/Components/TodoList";
import AddTodo from "./AddTodo";
import { useState, useEffect } from "react";

export default function TodoData() {
    const [todoObj, setTodoObj] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    // delete button?

    const [userIdList, setUserIdList] = useState([]);


    async function fetchData() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
            if (!response.ok) {
                console.log("Failed to fetch");
                return;
            }
            const result = await response.json();
            setTodoObj(result);
            const idSet = new Set(result.map(item => item.userId));
            setUserIdList([...idSet]); 
            // console.log(result);
            // console.log(idSet);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <AddTodo  setUserIdList ={setUserIdList} userIdList={userIdList} setTodoObj={setTodoObj} />
            <TodoList todos={todoObj} uniqueIdList={userIdList} />
        </div>
    );
}