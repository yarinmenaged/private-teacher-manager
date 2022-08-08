const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./db/models");
const port = require("./envModule").PORT || 2000;
const app = express();
const router = require("./routes/routes");
const subjects_router = require("./routes/subjectsRoute");
const event_router = require("./routes/event");
const { up } = require("./db/seeders/20220724075744-subjects");
const settings_router = require("./routes/settingsRoute");

Promise.resolve(sequelize.sync()).then(() => {
	const queryInterface = sequelize.getQueryInterface();
	up(queryInterface, sequelize);
});

app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
	res.setHeader("Access-Control-Allow-Credentials", true);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, OPTIONS"
	);
	next();
});
app.use("/users", router);
app.use("/subjects", subjects_router);
app.use("/event", event_router);

app.listen(port, () => console.log(`server is listening on port ${port}`));

