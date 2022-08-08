const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./db/models");
const port = require("./envModule").PORT || 2000;
const app = express();
const router = require("./routes/routes");
const path = require('path');
const subjects_router = require("./routes/subjectsRoute");
const event_router = require("./routes/event");
const { up } = require('./db/seeders/20220724075744-subjects');
const settings_router = require('./routes/settingsRoute');


Promise.resolve(sequelize.sync({force: true})).then(() => {
	const queryInterface = sequelize.getQueryInterface();
	up(queryInterface, sequelize);
});

app.use(express.json());
app.use(cookieParser());
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "true"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/users", router);
app.use("/subjects", subjects_router);
app.use("/event", event_router);
app.use("/settings", settings_router);

app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../client/build/')});
});

app.listen(port, () => console.log(`server is listening on port ${port}`));

