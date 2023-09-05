const express = require("express")
const connect = require("./configs/db");
const cors = require("cors")
const multer = require('multer');
const app = express();
const path = require("path");
const port = 1234



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// controllers
const userController = require("./src/controllers/Route")

app.use(cors())
app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use("/product", userController)

app.listen(port, async () => {
    await connect()
    console.log(`listening on port ${port}`)
})
