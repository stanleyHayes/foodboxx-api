import express from "express";

const app = express();

const server = app.listen(3000, () => {
    console.log(`Server connected on port 3000 in development mode`);
});


server.on('SIGTERM', () => {
    server.close((error) => {
        console.log(error)
    })
})
