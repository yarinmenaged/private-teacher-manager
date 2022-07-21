const express = require("express");
const cors = require("cors");
//debugger;
const envModule = require("./envModule");
const app = express();
const router = require("./routes/routes");

app.use(express.json());
app.use(cors());
app.use('/users', router);
app.listen(/*envModule.PORT*/2000, () =>
	console.log(`server is listening on port 2000`)
);
