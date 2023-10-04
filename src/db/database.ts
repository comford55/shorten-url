import mongoose from "mongoose";

const uri: string = Bun.env.DB_CONN_STRING!;
const dbName: string = Bun.env.DB_NAME || "shorten_url";

const db: Promise<void> = mongoose.connect(uri + dbName)
    .then(() => { console.log("Database connected!"); })
    .catch((err) => {
        console.log(err);
    });

export default db;