
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));






app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});




//THIS SENDS THE FORM VALUES FROM THE CART PAGE INTO THE CONSOLE;
app.get("/cart", (req, res) => {
    res.sendFile(__dirname + "/cart.html");
});

app.post("/cart", (req, res) => {
    res.send("values submitted");
    console.log("submitted");
    console.log(req.body);
});





app.get("/category", (req, res) => {
    res.sendFile(__dirname + "/category.html");
});





//THIS SENDS THE FORM VALUES FROM THE CHECKOUT PAGE INTO THE CONSOLE;
app.get("/checkout", (req, res) => {
    res.sendFile(__dirname + "/checkout.html");
});

app.post("/checkout", (req, res) => {
    res.send("values sent");
    console.log("submitted");
    console.log(req.body);
})




//THIS SENDS THE FORM VALUES FROM THE CONTACT PAGE INTO THE CONSOLE;
app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
});

app.post("/contact", (req, res) => {
    res.send("<h3> values sent...</h3>");
    console.log("submitted");
    console.log(req.body);
})




app.get("/product", (req, res) => {
    res.sendFile(__dirname + "/product.html");
});







app.listen(3000, () => {
    console.log("server running on port 3000!...");
});