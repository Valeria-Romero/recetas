const express = require("express");
const app = express();
const cors = require("cors");

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const Routes = require("./server/routes/recetas.routes");
Routes(app);

app.listen(8000, () => console.log("Express running on port 8000"));