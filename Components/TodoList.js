import TodoItem from "./TodoItem"
// Add filter to render by user, completion status
export default function TodoList({ todos }) {

    return (
        <table>
            <thead>
                <tr>
                    <th>| userId |</th>
                    <th> Task</th>
                    <th>| Completion |</th>
                </tr>
                <tr>
                    <th>----------</th>
                    <th>----------------------------------------------------------------------------------------------------</th>
                    <th>--------------------</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(item => <TodoItem todo={item} key={item.id} />)}
            </tbody>
        </table>
    )
}