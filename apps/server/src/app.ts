import express from "express";
import http from "http";
import path from "path";
import WebSocket from "ws";
import fs from 'fs';

// Broadcaster is a class that emit event when a new datapoint arrive
// This is just an emulation of real life situation where datapoint came in randomly
import { Broadcaster } from "./Broadcast";

const app = express();

// Create own HTTP server instead of using app.listen() in order to share the same port with WS
const httpServer = http.createServer(app);

// Initating all middleware for express
app
	.set("views", fs.createReadStream(path.resolve(`${__dirname}/../../../src/views`)))
	.set("view engine", "pug");

// Render index.pug from views for root URL
app
	.get("/", (req, res) => {
		res.render("index");
	});

// Initiate websocket server with the same server as express
const wss = new WebSocket.Server({ server: httpServer });

// Create new Broadcaster
// Maybe you can add multiple broadcaster for multiple bus using the same data to make it a little interesting
const broadcaster = new Broadcaster();

broadcaster.start();
broadcaster.on("data", (data) => {
	// Send data to all connected clients on websocket
	wss.clients.forEach((socket) => {
		socket.send(JSON.stringify(data));
	});
});

// Start listening on port 3000 for both express app and WS server
httpServer.listen(3000, () => {
	console.log("HTTP server listening on port 3000");
});
