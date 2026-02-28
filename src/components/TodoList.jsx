import TodoItem from "./TodoItem"

const TodoList = ({ activityArr, setactivityArr }) => {

  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>

      {activityArr.length === 0 && <p>You haven't added anything yet</p>}

      {activityArr.map((item, index) => (
        <TodoItem
          key={item.id}
          id={item.id}
          activity={item.activity}
          index={index}
          activityArr={activityArr}
          setactivityArr={setactivityArr}
        />
      ))}
    </div>
  )
}

export default TodoList