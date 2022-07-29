const express = require("express");
const cors = require("cors");
const { sequelize } = require("./db/models");
const envModule = require("./envModule");
const app = express();
const router = require("./routes/routes");
const subjects_router = require('./routes/subjectsRoute');
const event_router = require('./routes/event');

sequelize.sync();

app.use(express.json());
app.use(cors());

app.use("/users", router);

app.use('/subjects', subjects_router);

app.use('/event', event_router);

app.listen(envModule.PORT, () =>
	console.log(`server is listening on port ${envModule.PORT}`)
);
