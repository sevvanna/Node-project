import express from "express";
import shoproutes from "./routes/shop.routes.js"
const app = express();
const PORT = 6969;

app.get("/", (req, res) => {

res.json({ msg: "Hello students!" });

});
app.use('/shop',shoproutes);


app.listen(PORT, () => {
console.log(`The server is running at http://localhost:${PORT}`);

});


