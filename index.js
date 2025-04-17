import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const port = 8080;

// Start HTTP server
const server = app.listen(port, () => {
    console.log("Server is listening");
});

// Create WebSocket server
const wss = new WebSocketServer({ server });

// Handle WebSocket connection
wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.on("message", (data) => {
        console.log("Data from Client:", data.toString());
        ws.send("Thanks");
    });
});
