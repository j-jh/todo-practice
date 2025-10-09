"use client"
export default function DeleteTodo({ idToDelete, showEditOptions }) {
    // pass funciton to set todo object
    // filter out

    async function deleteRequest() {
        try {
            // delete takes in id param?s
            const request = await fetch(`https://jsonplaceholder.typicode.com/todos/${idToDelete}`);

            if (!request.ok) {
                console.log("Invalid ");
                return;
            }
            const result = await request.json();
            console.log(result);
            console.log("Deleted: " + idToDelete);
            // update in state?

        } catch (error) {
            console.log(error.message);
        }
    }

    function handleDelete() {
        deleteRequest();
    }

    return (
        <>
            {showEditOptions && <button onClick={handleDelete}>Delete</button>}
        </>

    )
}