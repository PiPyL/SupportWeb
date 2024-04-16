const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Đây là chuỗi trả về từ API!");
});

app.listen(port, () => {
  console.log(`Server đang lắng nghe trên cổng ${port}`);
});
