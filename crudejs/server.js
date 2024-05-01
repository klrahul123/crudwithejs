import express from "express"
const app = express()
import connectData from "./db/connection.js"
import router from "./route/web.js"
const port = 8000

const data = 'mongodb://localhost:27017'
connectData(data);
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use('/', router)


app.listen(port, () => {
    console.log(`server start at http://localhost:${port}`);
})