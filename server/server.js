const express = require("express");
const cors = require("cors");
const envModule = require("./envModule");
const subjectRouter = require("./routers/subjectRouter");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/subject", subjectRouter);
app.listen(2000, () =>
	console.log(`server is listening on port ${envModule.port}`)
);
