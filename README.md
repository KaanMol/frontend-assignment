# Setup

So I wanted to do way more than I currently have, but I had a vacation planned to Malaga and my girlfriend was already not amused at the fact I took my laptop with me, this is sadly how far I could have come. There are things I would have done differently/I would have fixed, but hopefully it leaves an impression. At the presentation of this project I can clear a lot up.

## Quick setup with VSCode and Docker
This project is built with NX and Devcontainers.
Microsoft has a great guide on how to setup VSCode with Devcontainers. You can find it here at https://code.visualstudio.com/docs/devcontainers/tutorial.
AFTER the section "Install the extension", check back for the following instructions.

Once you have VSCode and the Devcontainer extension installed, you can open the project in VSCode and it will automatically ask you to reopen the project in a container. This will take a while the first time, but after that it will be much faster.

After that, you can run the following commands in the terminal to start the project:
```
nx run-many --target=serve
```

## Manual setup
This project is made with Node v18.2.1. You can use NVM to install this version. You can find the installation guide here:

### Windows
https://github.com/coreybutler/nvm-windows

### Linux and MacOS
https://github.com/nvm-sh/nvm

### Install dependencies
For the dependencies I used yarn, you can follow the installation guide here:
https://classic.yarnpkg.com/lang/en/docs/install

After that you can run the following command to install the dependencies:
```
yarn install
```

### Start the project
To start the project you can run the following command:
```
nx run-many --target=serve
```

# ChargePoint Frontend Assignment
---
![](https://imgs.xkcd.com/comics/self_description.png)

This repository holds the ViriCiti Frontend assignment. In this project you will find the description regarding the assignment for you to do. This assignment represent what we do on a day to day basis. We receive raw data from vehicles store it on database then send it to browser app via web socket.

---

## Getting Started
First of all, fork the repository at:

`https://github.com/viriciti/frontend-assignment`

Then open up your terminal and clone the forked repository

<sup>Replace [YOUR_USERNAME] with your name</sup>

`git clone https://github.com/[YOUR_USERNAME]/frontend-assignment.git`

Enter the directory

`cd frontend-assignment`

Install all the dependencies

`npm i`

Run the app

`npm start`

---

## The Assignment
We have provided you with a starter kit that broadcast vehicle data via web socket. You can find the HTTP server on `src/server/app.js`, it's a bare minimum setup containing an express server to serve HTML page and ws server that broadcast raw data. What you need to build is a front end application that should look like below:

![](https://github.com/viriciti/frontend-assignment/raw/master/sketch.png)

The whole front end application should be build with [React.js](https://reactjs.org/) or [Vue.js](https://vuejs.org/), but you're free to choose how it's build and composed. Data that are needed to render all those component is provided via the web socket connection.

As you can see in this repository there are no webpack configuration and frontend server. You're free to create your own configuration, maybe you want different config for production and development.

### Get Creative!
You can also extend the functionality for both front end and back end of the application. For example, making a more informative front end or incident for vehicle that went to fast on the road (this can be done both in the front end and back end, double points for back end implementation ;) )
### FE Framework!
You can use the frontend framework that you want! (but preferably ReactJS or VueJS)

### The data
On websocket stream the data should look like this:

```JS
{
  time: 1511512585495,
  energy: 85.14600000000002,
  gps: ["52.08940124511719","5.105764865875244"],
  odo: 5.381999999997788,
  speed: 12,
  soc: 88.00000000000007
}
```

* time - Unix timestamp of the moment the datapoint was recorder
* energy - Energy used in kWh
* gps - Latitude and longitude where the datapoint was recorded
* odo - The distance driven in km
* speed - The speed the vehicle was going in km/h
* soc - The state of charge (battery) of the vehicle in %

## Read up material
Looking to level up your knowledge and skills? These are some good articles/courses that you can check out.
* [Vue JS](https://vuejs.org/)
* [ReactJS](https://reactjs.org/)
* [Chartjs](https://www.chartjs.org/)
* [Node.js WebSocket](https://flaviocopes.com/node-websockets/)
### General
* Learn [Node.js and it's modules](http://nodeschool.io/#workshoppers)

## Questions
If you have any questions about the assignment or project setup feel free to contact us at <a href='mailto:enrique.tamames@chargepoint.com'>enrique.tamames@chargepoint.com</a> or <a href='mailto:marco.vanharten@chargepoint.com'>marco.vanharten@chargepoint.com</a>. You can also come by the office. We're always ready to help.

Good luck with the assignment!
