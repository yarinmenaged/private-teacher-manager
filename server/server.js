const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./db/models");
const port = require("./envModule").PORT || 2000;
const app = express();
const router = require("./routes/routes");

sequelize.sync();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/users", router);

app.listen(port, () => console.log(`server is listening on port ${port}`));
