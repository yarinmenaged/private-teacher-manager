const express = require("express");
const cors = require("cors");
const envModule = require("./envModule");
const { sequelize } = require("./db/models");
const loginRouter = require("./routers/loginRouter");
const app = express();

sequelize.sync();

app.use(express.json());
app.use(cors());

app.use("/login", loginRouter);
app.listen(envModule.PORT, () =>
	console.log(`server is listening on port ${envModule.PORT}`)
);
