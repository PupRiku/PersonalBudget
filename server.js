const express = require('express');
const dotenv = require("dotenv");
const logger = require("morgan");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(logger("dev"));
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
