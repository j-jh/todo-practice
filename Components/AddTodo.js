"use client";
import { useState } from "react";
export default function AddTodo({ userIdList, setTodoObj, setUserIdList }) {
    const [formData, setFormData] = useState({ userId: "", title: "" });

    // restrict userid input to only nums

    async function fetchPost(title, currUserId) {
        try {
            const request = await fetch(`https://jsonplaceholder.typicode.com/todos`,
                {
                    method: `POST`,
                    body: JSON.stringify({
                        userId: currUserId,
                        title: title,
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
                        userId: currUserId,
                        title: title,
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
        let currUserId = formData.userId
        if (currUserId === "New User") {
            currUserId = userIdList.length + 1;

            setFormData(prev => ({
                ...prev, userId: currUserId
            }))
            setUserIdList(prev => [...prev, currUserId]);
            console.log(userIdList);
        }
        // console.log(formObj);
        fetchPost(formData.title, Number(currUserId));
        clearForm(false);
    }

    function clearForm(clearAll) {
        if (clearAll) {
            setFormData({ userId: "", title: "" });
        }
        setFormData(prev => ({ ...prev, title: "" }));
    }

    function handleIdSelect(e) {

        setFormData(prev => ({ ...prev, userId: e.target.value }))
        console.log(e.target.value);
    }

    const [showAdd, setShowAdd] = useState(false);
    return (
        <div>
            <button onClick={() => setShowAdd(prev => !prev)}>{!showAdd ? "Add Item" : "Close"} </button>
            {showAdd &&
                <>
                    <form onSubmit={handleFormSubmit}>
                        <br></br>
                        <label>| User: </label>
                        <select value={formData.userId} onChange={handleIdSelect}>
                            {userIdList.map(
                                item => <option key={item} value={item}>
                                    {item}
                                </option>
                            )}
                            <option key={userIdList.length} value={"New User"}>New User</option>
                        </select>
                        <br></br>
                        <label>| Item: </label>
                        <textarea name="title"
                            value={formData.title}
                            onChange={
                                e => setFormData(prev =>
                                    ({ ...prev, title: e.target.value })
                                )} />
                        <br></br>
                        <button type="submit">Add</button>
                        <button type="button" onClick={e => clearForm(true)}>Clear</button>
                        <br></br>
                        <br></br>

                    </form>
                </>
            }

        </div>
    )
}