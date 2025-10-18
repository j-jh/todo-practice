import { useState } from "react"

export default function EditTodo({ showEditOptions }) {


    const [showEditMenu, setShowEditMenu] = useState(false);
    const [newItem, setNewItem] = useState("");

    return (
        <>
            {showEditOptions &&
                <button onClick={() => setShowEditMenu(prev => !prev)}>
                    Edit</button>}
            <br></br>
            {showEditMenu &&
                <>
                    <br></br>
                    <textarea />
                    <br></br>
                    <button>Change</button>
                </>
            }
        </>
    )
}