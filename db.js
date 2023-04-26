const mongoose = require("mongoose");

/*mongoose
  .connect("mongodb://127.0.0.1:27017/login", {
    useNewUrlparser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect");
  })
  .catch(() => {
    console.log("not connect");
  });

module.exports = mongoose;*/

//const mongoURL = "mongodb://127.0.0.1:27017/login";
const connectToMongo = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/login", { useNewUrlParser: true })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error("Error connecting to database", err);
    });
};

module.exports = connectToMongo;
// hello darpu
