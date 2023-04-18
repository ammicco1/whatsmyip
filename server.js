const express = require("express");
const server = express();

const port = process.env.WMIPORT || 3045;

server.listen(port, function(){
    console.debug(`whatsmyip server up on port ${port}`);
});

server.get("/", function(req, res){
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    let ipv4 = ip.split(":")[ip.split(":").length - 1];
    let ipv6 = ip.replace(ipv4, "");

    console.debug(`req: ${ip}`);

    let data = {
        "ipv4": ipv4, "ipv6": ipv6
    };

    res.send(data);
});

server.get("/ipv4", function(req, res){
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    let ipv4 = ip.split(":")[ip.split(":").length - 1];

    console.debug(`req: ${ip}`);

    let data = {
        "ipv4": ipv4
    };

    res.send(data);
});

server.get("/ipv6", function(req, res){
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    let ipv4 = ip.split(":")[ip.split(":").length - 1];
    let ipv6 = ip.replace(ipv4, "");

    console.debug(`req: ${ip}`);

    let data = {
        "ipv6": ipv6
    };

    res.send(data);
});