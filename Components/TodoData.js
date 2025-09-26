"use client"
import TodoList from "./TodoList"
import { useState, useEffect } from "react"
export default function TodoData() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            if (!response.ok) {
                console.log("Error fetching");
                return;
            }
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (error) {
            console.log(error);
        }
    } fetchData()}, []);

    return (
        <TodoList todos={data || []}/>
    )
}