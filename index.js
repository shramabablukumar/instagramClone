const express = require('express');
const app = express();
let port = 8080;
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",(req,res)=> {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
app.get("/rolldice ",(req,res)=> {
    res.send("hello");
});
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    console.log(data)
    res.render("instgram.ejs", {data});
});


app.get("/rolldice ",(req,res) => {
    res.render("rolldice.ejs");
});