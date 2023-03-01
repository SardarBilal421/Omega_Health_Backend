const app = require("./app");
const fs = require("fs");
const http = require("http");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

//const Db = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(
    "mongodb+srv://OmigaHealth:0wnLZjqe8k0TMWkW@hms.u7f513j.mongodb.net/OmigaHealth?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then((con) => {
    console.log("DataBase Connected Successfully");
  });

// const options = {
//   key: fs.readFileSync("/etc/letsencrypt/live/omigahealth.com/privkey.pem"),
//   cert: fs.readFileSync("/etc/letsencrypt/live/omigahealth.com/fullchain.pem"),
// };

const port = process.env.PORT;

const server = http.createServer(app);
server.listen(port, () => {
  console.log(`App is running on https://localhost:${port}`);
});
