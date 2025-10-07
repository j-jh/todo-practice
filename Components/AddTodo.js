"use client";
import { useState } from "react";
export default function AddTodo({ setTodoObj }) {
    const [formData, setFormData] = useState({ userId: "", title: "" });

    async function fetchPost() {
        try {
            const request = await fetch(`https://jsonplaceholder.typicode.com/todos`,
                {
                    method: `POST`,
                    body: JSON.stringify({
                        userId: "",
                        title: "",
                        completed: false
                    })
                }
            )
            if (!request.ok) {
                console.log("Failed to post");
                return;
            }
            // update 
            const result = await request.json();
            // console.log(result);
            setTodoObj(
                prev => ([
                    ...prev,
                    {
                        userId: formData.userId,
                        title: formData.title,
                        completed: false,
                        id: Date.now()
                    }

                ])
            )
        } catch (error) {
            console.log(error.message);
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const formObj = new FormData(e.target);
        // console.log(formObj);
        fetchPost();
    }

    function clearForm() {
        setFormData({ userId: "", title: "" });
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input name="userId"
                    value={formData.userId}
                    onChange={
                        e => setFormData(prev =>
                            ({ ...prev, userId: e.target.value })
                        )} />
                <input name="title"
                    value={formData.title}
                    onChange={
                        e => setFormData(prev =>
                            ({ ...prev, title: e.target.value })
                        )} />
                <button type="submit">Add</button>
                <button onClick={clearForm}>Clear</button>
            </form>
        </div>
    )
}