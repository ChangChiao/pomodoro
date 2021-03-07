import { useState, useMemo } from "react"
import { useSelector, useDispatch } from 'react-redux';

const TodoList = (props) => {
    const todoList = useSelector(state => state.todoList);
    const doneList = useSelector(state => state.doneList);
    const isRunning = useSelector(state => state.isRunning)
    const [title, setTitle] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState(true)

    const dispatch = useDispatch();

    const addTodoList = () => {
        dispatch({
            type: 'ADD_TODOLIST',
            payload: { title },
        });
        setTitle('')
    };


    const deleteItem = (index) => {
        dispatch({
            type: 'DELETE_TODOLIST',
            payload: { index },
        });
        if (index === 0) props.setReset()
    }

    const reviseItem = (index) => {
        const status = todoList[index].isEdit
        if (status) {
            dispatch({
                type: 'REVISEDONE_TODOLIST',
                payload: { index, name },
            });
        } else {
            dispatch({
                type: 'REVISE_TODOLIST',
                payload: { index },
            });
            setName(todoList[index].title)
        }
    }

    const changeTab = () => {
        setStatus(!status)
    }

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
            addTodoList()
        }
    }

    // const peddingList = useMemo(() => {
    //     return status ? todoList : doneList
    // }, [status])

    return (
        <aside>
            <header>
                <h2>待辦清單</h2>
                <div className="tab">
                    <span className={status ? 'active' : ''} onClick={changeTab}>未完成</span>
                    <span className={!status ? 'active' : ''} onClick={changeTab}>已完成</span>
                </div>
            </header>
            <div className="title_box">
                <input type="text" value={title} onKeyPress={onKeyUp} onChange={e => setTitle(e.target.value)} />
                <button className="add_btn" onClick={addTodoList}>
                    <i className="fas fa-plus"></i>
                </button>
            </div>
            <ul>
                {status ? todoList.map((val, i) => {
                    return (
                        <li key={i}>
                            {val.isEdit ? null : <span>{val.title} {isRunning && i === 0 ? <span className="ing">(進行中)</span> : null}</span>}
                            {val.isEdit ? <input type="text" value={name} onChange={e => setName(e.target.value)} /> : null}
                            <span>
                                <img src="/images/icon-edit.svg" onClick={() => reviseItem(i)} alt="" />
                                <img src="/images/icon-delete.svg" onClick={() => deleteItem(i)} alt="" />
                            </span>
                        </li>
                    )
                }) : doneList.map((ele, k) => {
                    return (
                        <li className="done_item" key={k}>{ele}</li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default TodoList