
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

export default function TodoItem({ todo, showEditOptions }) {

    const { id, userId, title, completed } = todo;

    return (
        <>
            <tr>
                <td>| {userId} </td>
                <td>| {title} </td>
                <td>| {completed ? "✅" : "❌"} |</td>
                <td><DeleteTodo idToDelete={id} showEditOptions={showEditOptions} />
                    <EditTodo idToDelete={id} showEditOptions={showEditOptions} />
                </td>
            </tr>
            <tr>
                <td>------------</td>
                <td>----------------------------------------------------------------------------------------------------</td>
                <td>----------</td>
                <td> </td>
            </tr >
        </>
    )
}