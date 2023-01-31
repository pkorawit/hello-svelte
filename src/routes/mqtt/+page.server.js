
// import * as mqtt from "mqtt"
// const clientId = "mqttjs_" + Math.random().toString(8);
// const host = "ws://broker.hivemq.com:8000/mqtt";
// const options = {
//     keepalive: 30,
//     clientId: clientId
// };

// console.log("connecting mqtt client");
// const client = mqtt.connect(host, options);

// client.on("error", function (err) {
//     console.log(err);
//     client.end();
// });

// client.on("connect", function () {
//     console.log("client connected:" + clientId);
//     client.subscribe("/manalab/dht22/", { qos: 0 });
// });

// client.on("message", function (topic, message, packet) {
//     console.log(topic, message);
// });

// client.on("close", function () {
//     console.log(clientId + " disconnected");
// });