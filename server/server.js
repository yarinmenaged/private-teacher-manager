const express = require("express");
const cors = require("cors");
const { sequelize } = require("./db/models");
const envModule = require("./envModule");
const app = express();
const router = require("./routes/routes");
const path = require('path');

sequelize.sync({ force: true });

app.use(express.json());
app.use(cors());
app.use("/users", router);


app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, '../client/build/')});
});

app.listen(envModule.PORT, () =>
	console.log(`server is listening on port ${envModule.PORT}`)
);
