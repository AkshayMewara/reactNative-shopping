const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shoppingapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfull");
  })
  .catch((e) => {
    console.log("No connection");
  });
