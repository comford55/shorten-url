import express, { Express } from 'express';
import db from './db/database';

const app: Express = express();
const port: string = Bun.env.PORT || "3000";

app.use("/", (req, res) => {
    res.status(404).json({message: "Page not found"})
});

const startServer = async () => {
    await db;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

startServer();

// const server = Bun.serve({
//     port: 3000,
//     fetch(request) {
//         return new Response("Hello via Bun!");
//     }
// });
