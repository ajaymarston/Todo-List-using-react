import { useState } from "react"

const AddtodoForm = (props) => {
  const activityArr = props.activityArr
  const setactivityArr = props.setactivityArr

  const [newactivity, setNewactivity] = useState("")

  function handleChange(event) {
    setNewactivity(event.target.value)
  }

  function addActivity() {
    if (!newactivity) return

    setactivityArr([
      ...activityArr,
      { id: Date.now(), activity: newactivity }   // ✅ correct variable
    ])

    setNewactivity("")
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">Manage Activities</h1>

      <div>
        <input
          value={newactivity}
          onChange={handleChange}
          type="text"
          className="border border-black rounded-sm bg-transparent p-1"
          placeholder="Next Activity?"
        />

        <button
          onClick={addActivity}
          className="bg-black text-white p-1 border border-black rounded-sm"
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default AddtodoForm