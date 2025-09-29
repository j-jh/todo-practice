"use client";
import TodoItem from "./TodoItem"
import { useState, useEffect } from "react";
// Add filter to render by user, completion status
export default function TodoList({ todos }) {
    // search by id, task
    // filter by completion

    const [showFilter, setShowFilter] = useState("All");
    const [dataFilter, setDataFilter] = useState([]);
    const [idFilter, setIdFilter] = useState(0);
    // map ids
    const [uniqueId, setUniqueId] = useState([]);
    /*
    .filter(
        item => {
            if (idFilter === 0) {
                return item;
            } else {
                return item.id === searchId;
            }
        }
    )
    */

    useEffect(() => {
        handleDataFilter();
        handleUniqueId();
    }, [showFilter, todos]);

    function handleUniqueId() {
        const idSet = new Set(todos.map(item => item.userId));
        setUniqueId([...idSet]);
        console.log([...idSet]);
    }

    function handleDataFilter() {
        setDataFilter(
            todos.filter(item => {
                if (showFilter === "All") {
                    return item;
                } else if (showFilter === "Complete") {
                    return item.completed === true;
                } else {
                    return item.completed === false;
                }
            })
        )
    }

    function handleShowFilter(e) {
        setShowFilter(e.target.value);
        console.log(e.target.value);
    }
    // get filter, create array, return and map


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>| userId |</th>
                        <th> Task</th>
                        <th>| Completion |</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>
                            <select onChange={handleShowFilter}>
                                <option value={"All"}>All</option>
                                <option value={"Complete"}>Complete</option>
                                <option value={"Incomplete"}>Incomplete</option>
                            </select>
                        </th>
                    </tr>
                    <tr>
                        <th>----------</th>
                        <th>----------------------------------------------------------------------------------------------------</th>
                        <th>--------------------</th>
                    </tr>
                </thead>
                <tbody>

                    {dataFilter.map(item => <TodoItem todo={item} key={item.id} />)}

                </tbody>
            </table>
        </div>
    )
}