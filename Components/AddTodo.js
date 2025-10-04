"use client";
import { useState } from "react";
export default function AddTodo() {
    const [formData, setFormData] = useState({ userId: "", title: "" });
    

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