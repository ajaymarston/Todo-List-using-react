import AddtodoForm from "./AddtodoForm"
import TodoList from "./TodoList"
import {useState} from "react"
const TodoContainer = () => {
    const [activityArr,setactivityArr] = useState([
    { id: 1, activity: "Go for a walk" },
    { id: 2, activity: "Have Breakfast" }
  ]);
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
           <AddtodoForm activityArr={activityArr} setactivityArr={setactivityArr} ></AddtodoForm>
           <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
        </div>
        </div>
    )
}
export default TodoContainer;