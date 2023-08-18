const express = require("express");
const moogoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

//middlewares and routes
app.use(express.json());
app.use(
  cors({
    origin: `http://localhost:3000`,
  })
);


const mongodb = process.env.MONGODB_URL;
moogoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Conected to Mongodb Yesss...`))
  .catch((err) => console.log(err));

//Telling server to use file we created
const exerciseroutes = require("./routes/exerciseroutes");
const usersroutes = require("./routes/Usersroutes");

app.use("/", usersroutes);
app.use("/", exerciseroutes);

//Listening  port
app.listen(PORT, () => {
  console.log(`listening on: ${PORT}`);
});
