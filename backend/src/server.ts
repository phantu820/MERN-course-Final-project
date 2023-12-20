import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";
import "dotenv/config"

const port = 5000;

mongoose.connect('mongodb://127.0.0.1:27017/mern-auth-typescript')
    .then(() => {
        console.log("Mongoose connected");
        app.listen(port, () => {
            console.log("Server running on port: " + port);
        });
    })
    .catch(console.error);