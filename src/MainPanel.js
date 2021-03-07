import { useEffect, useState, useRef, useMemo, useImperativeHandle, forwardRef} from "react"
import { useSelector, useDispatch } from 'react-redux';

const MainPanel = forwardRef((props, ref) => {
    const totalTime = 25 * 60 * 1000
    const relaxTime = 5 * 60 * 1000
    // const totalTime = 1 * 60 * 1000
    // const relaxTime = 0.5 * 60 * 1000
    const [peroid, setPeroid] = useState(totalTime);
    const [clockDate, setclockDate] = useState('')
    const [clockTime, setclockTime] = useState('')
    const todoList = useSelector(state => state.todoList);
    const isRunning = useSelector(state => state.isRunning)
    const dispatch = useDispatch();
    let intervalId = useRef(null)
    let clockId = useRef(null)

    useImperativeHandle(ref, () => ({
        resetTimer
    }))


    const countDown = () => {
        const startTime = new Date().getTime()
        intervalId.current = setInterval(() => {
            const nowTime = new Date().getTime()
            const distance = peroid - (nowTime - startTime)
            // console.log('distance', distance);
            setPeroid(distance)
            if (distance <= 0) {
                resetTimer()
            }
        }, 400);
    }

    const startTimer = () => {
        clockId.current = setInterval(() => {
            setclockDate(new Date().toLocaleDateString())
            setclockTime(new Date().toLocaleTimeString())
        }, 400);
    }

    const pauseTimer = () => {
        if (isRunning) {
            setIsRunning(false)
            clearInterval(intervalId.current)
        } else {
            if (!firstItem) {
                alert('請先新增待辦事項!')
                return
            }
            setIsRunning(true)
            countDown()
        }
    }

    const setIsRunning = (boolean) => {
        dispatch({
            type: 'REVISE_ISRUNNING',
            payload: { boolean },
        });
    }

    const formateTime = (timeStamp) => {
        const mm = Math.floor(timeStamp / (60 * 1000))
        const ss = Math.floor((timeStamp - mm * 60 * 1000) / 1000)
        return `${addZero(mm)}:${addZero(ss)}`
    }
    const addZero = (num) => {
        const str = num.toString()
        if (str.length === 1) return '0' + str
        return str
    }

    const deleteItem = (index) => {
        dispatch({
            type: 'DELETE_TODOLIST',
            payload: { index },
        });
    }

    const handleReset = (evt, isDelete) =>{
        resetTimer(isDelete)
    }

    const resetTimer = (isDelete) => {
        if (todoList.length === 0) return
        clearInterval(intervalId.current)
        setPeroid(totalTime)
        setIsRunning(false)
        if (!isDelete) {
            dispatch({
                type: 'ADD_DONELIST',
            });
            deleteItem(0)
        }
    }


    const firstItem = useMemo(() => {
        return (todoList[0] && todoList[0]['title']) || null
    }, [todoList])

    const isRelaxTime = useMemo(() => {
        return peroid < relaxTime
    }, [peroid])

    const showIcon = useMemo(() => {
        const status = isRelaxTime ? 'green' : 'orange'
        const isWork = isRunning ? 'pause' : 'play'
        return `/images/icon-${isWork}--${status}.svg`
    }, [isRelaxTime, isRunning])

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(intervalId.current)
            clearInterval(clockId.current)
        }
    }, [])

    return (
        <section>
            <div className="time_zone">
                <span>{clockDate}</span>
                <span>{clockTime}</span>
            </div>
            <h1 className="time">Time:{formateTime(peroid)}</h1>
            <h2>當前任務：{firstItem ? firstItem : '尚未新增待辦事項'}</h2>
            {isRelaxTime ? (<h3>
                <span>休息，</span>
                是為了下一次的努力。
            </h3>) : null}
            <div className="btn_list">
                <button className="start" onClick={pauseTimer} >
                    <img src={showIcon} alt="" />
                </button>
                {
                    firstItem ? (<button onClick={handleReset}>
                        <i className="fas fa-times"></i>
                    </button>) : null
                }
            </div>
            <img className="tomato" src={`/images/tomato--${isRelaxTime ? 'green' : 'orange'}.svg`} />
        </section>
    )
})

export default MainPanel