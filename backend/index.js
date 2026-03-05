const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())

const PORT = 3009

let task = [
    {
        id: 1,
        title: "Belajar di EISD",
        completed: false
    }
]

app.get("/task", async (req, res) => {
    try{

        const data = await new Promise((resolve) => {
            setTimeout(() => resolve(task), 500)
        })

        res.status(200).json({
            success: true,
            data: data
        })
    }
    catch {
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
})

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`)
})



