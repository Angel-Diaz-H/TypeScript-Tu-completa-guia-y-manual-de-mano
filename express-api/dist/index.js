import * as express from 'express';
// const express = require('express')
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.status(401).json({
        ok: false,
        msg: 'No hay token en la petición'
    });
});
app.listen(port, function () {
    console.log("Example app listening on port ".concat(port));
});
