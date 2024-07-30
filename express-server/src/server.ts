import cors from 'cors'
import userRoutes from './routes/user.routes.ts'

const express = require("express");
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const PORT = 8000;

app.use(cors());

app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get('/user/:id', (req, res) => {
    let dummyData = {
        "id": req.params["id"],
        "username": "Ash",
        "wins": 15,
        "losses": 10,
    }
    res.json(dummyData)
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
