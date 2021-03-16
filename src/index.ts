import express from 'express';

const app = express();

app.get("/", (request, response) => {
    response.json({message: "Hello World from typescript."});
});

app.listen(3333);