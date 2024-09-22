import mongoose from "mongoose";
import { env } from "process";

export default async function connect() {
    console.log(env)
    try {
        mongoose.connect('mongodb+srv://ganesh:<z#i$Kb-*ty.LJ9M>@cluster0.9qygzxi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("MongoDB connected successfully");
        });

        connection.on("error", (err) => {
            console.log(
                "MongoDB connection error. Please make sure MongoDB is running. " + err
            );
            process.exit();
        });
    } catch (error) {
        console.log("Something goes wrong!");
        console.log(error);
    }
}

