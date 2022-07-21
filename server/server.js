const express = require("express");
const cors = require("cors");
debugger;
const envModule = require("./envModule");
const app = express();

app.use(express.json());
app.use(cors());
app.listen(envModule.PORT, () =>
	console.log(`server is listening on port ${envModule.PORT}`)
);
