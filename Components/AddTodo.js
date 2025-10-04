"use client";
import { useState } from "react";
export default function AddTodo() {
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
            const result = await request.json();
            console.log(result);
        } catch (error) {
            console.log(error.message);
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const formdata = new FormData(e.target);
        console.log(formdata);
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
                            ({ ...formData, userId: e.target.value })
                        )} />
                <input name="title"
                    value={formData.title}
                    onChange={
                        e => setFormData(prev =>
                            ({ ...formData, title: e.target.value })
                        )} />
                <button type="submit">Add</button>
                <button onClick={clearForm}>Clear</button>
            </form>
        </div>
    )
}