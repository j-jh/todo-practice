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
    const [uniqueIdList, setUniqueIdList] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        handleUniqueId();
        handleDataFilter();
    }, [showFilter, idFilter, search, todos])

    function handleUniqueId() {
        const idSet = new Set(todos.map(item => item.userId));
        setUniqueIdList([...idSet]);
        console.log([...idSet]);
    }

    function handleSearch(e) {
        setSearch(e.target.value);
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
            }).filter(
                item => {
                    if (idFilter === 0) {
                        return item;
                    } else {
                        return item.userId === idFilter;
                    }
                }
            ).filter(
                item => {
                    if (search === "") {
                        return item;
                    } else {
                        return item.title.toLowerCase().includes(search.toLowerCase())
                    }
                }
            )
        )
    }

    function handleShowFilter(e) {
        setShowFilter(e.target.value);
        console.log(e.target.value);
    }
    function handleIdSelection(e) {
        setIdFilter(Number(e.target.value));
        console.log(e.target.value);
    }

    function handleResetFilter() {
        setIdFilter(0);
        setShowFilter("All");
    }

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
                        <th>
                            <select onChange={handleIdSelection}
                                value={idFilter}>
                                <option value={0}>
                                    All
                                </option>
                                {uniqueIdList.map(num =>
                                    <option key={num}
                                        value={num}>{num}
                                    </option>)}
                            </select>

                        </th>
                        <th>
                            <input value={search} onChange={handleSearch} />
                            <button onClick={() => setSearch("")}>Clear</button>
                        </th>
                        <th>
                            <select value={showFilter} onChange={handleShowFilter}>
                                <option value={"All"}>All</option>
                                <option value={"Complete"}>Complete</option>
                                <option value={"Incomplete"}>Incomplete</option>
                            </select>
                        </th>
                        <th>
                            <button onClick={handleResetFilter}>Clear</button>
                        </th>
                    </tr>
                    <tr>
                        <th>----------</th>
                        <th>----------------------------------------------------------------------------------------------------</th>
                        <th>--------------------</th>
                    </tr>
                </thead>
                <tbody>
                    {dataFilter.map(item => <TodoItem key={item.id} todo={item} />)}
                </tbody>
            </table>
        </div>
    )
}