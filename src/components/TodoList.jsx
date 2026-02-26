import { useState } from "react"
import TodoItem from "./TodoItem"
import AddtodoForm from "./AddtodoForm"

const TodoList=()=>{
  const [activityArr,setactivityArr] = useState([
    { id: 1, activity: "Go for a walk" },
    { id: 2, activity: "Have Breakfast" }
  ]);
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
     
     {activityArr===0? <p>You haven't added anything yet</p>:""} 
      {
      activityArr.map(function(item, index) {
      return  <TodoItem
               id={item.id}
          activity={item.activity}
          index={index} activityArr={activityArr} setactivityArr={setactivityArr} />
})
}
    </div>
  )
}

export default TodoList;