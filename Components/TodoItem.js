export default function TodoItem({ todo }) {

    const { userId, title, completed } = todo;
    return (
        <tr>
            <td>| {userId} </td> 
            <td>| {title}</td> 
            <td>| {completed ? "✅" : "❌"} |</td>
        </tr>
    )
}