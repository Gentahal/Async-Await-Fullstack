"use client"
import { useEffect, useState } from "react"

export default function Home() {

  const [tasks, setTasks] = useState<Array<{ id: string; title: string; completed: boolean }>>([])
  const [err, setError] = useState<string | null>(null)

  const fetchTask = async () => {
    try {
      const res = await fetch("http://localhost:3009/task")

      if(!res.ok){
        throw new Error("Fetch Failed")
      }

      const data = await res.json()

      setTasks(data.data)

    } catch(err) {
      setError(err instanceof Error ? err.message : "Data API Crash")
    }
  }

  useEffect(() => {
    fetchTask()
  }, [])

  return (
    <div style={{ padding: 40}}>
      <h1>Task Manager</h1>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}
            {task.completed ? "Done" : "Pending"}
          </li>
        ))}
      </ul>
    </div>
  )

}