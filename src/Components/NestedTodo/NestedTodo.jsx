import React, {useState} from "react";

const NestedTodolist=({todoId, todoByIdObj, onClickHandler, marginLeft}) => {
    const todo=todoByIdObj[todoId];

    if (!todo) return null;

    return (
        <div style={{paddingLeft: marginLeft, paddingTop: "8px"}}>
            <div style={{display: "flex", alignItems: "center"}}>
                <div>{todo.title}</div>
                <button style={{marginLeft: 12, padding: 8}}
                    onClick={(e) => {
                        e.preventDefault();
                        onClickHandler(todo.id);
                    }}
                >
                    Add Sub
                </button>
            </div>
            {todo.children?.length>0&&
                todo.children.map((childId) => (
                    <div key={childId}>
                        <NestedTodolist
                            marginLeft={marginLeft+20}
                            todoId={childId}
                            todoByIdObj={todoByIdObj}
                            onClickHandler={onClickHandler}
                        />
                    </div>
                ))}
        </div>
    );
};

function NestedTodo() {
    const [label, setLabel]=useState("");
    const [todoByIdObj, setTodoByIdObj]=useState({});

    const todoListHandler=(e) => {
        e.preventDefault();
        const title=label.trim();

        if (!title) {
            alert("please enter label");
            return;
        }

        const newTodo={
            id: Date.now(),
            title,
            children: [],
            subtask: false
        };

        setTodoByIdObj((prev) => {
            return {
                ...prev,
                [newTodo.id]: newTodo
            }
        });
        setLabel("");

    };

    const addSubTaskHandler=(parentId) => {
        const title=label.trim();

        if (!title) {
            alert("please enter label");
            return;
        }

        const newTodo={
            id: Date.now(),
            title,
            children: [],
            subtask: true
        };;

        setTodoByIdObj((prev) => {
            const parentTodo=prev[parentId]
            return {
                ...prev,
                [newTodo.id]: newTodo,
                [parentId]: {
                    ...parentTodo,
                    children: [...parentTodo.children, newTodo.id]
                }
            };
        });
        setLabel("");
    };

    return (
        <div>
            <h2>NestedTodo</h2>
            <div style={{display: "flex", alignItems: "center"}} >
                <input style={{width: 260, height: 33, fontSize: 18}} id="input-label" value={label} onChange={(e) => setLabel(e.target.value)} />
                <button style={{marginLeft: 30, padding: 10}} onClick={todoListHandler}>Add</button>
            </div>
            <div style={{marginTop: "20px", display: "flex", flexDirection: "column"}}>
                {Object.keys(todoByIdObj).map((todoId) => {
                    if (!todoByIdObj[Number(todoId)].subtask) {
                        return (
                            <div style={{paddingTop: "20px"}} key={todoId}>
                                <NestedTodolist
                                    marginLeft={0}
                                    todoId={Number(todoId)}
                                    todoByIdObj={todoByIdObj}
                                    onClickHandler={addSubTaskHandler}
                                />
                            </div>
                        )
                    } else {
                        return null
                    }
                })}
            </div>
        </div>
    );
}

export default NestedTodo;
