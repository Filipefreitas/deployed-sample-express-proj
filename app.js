const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.use(express.static("public"));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/", (req,res)=>{
    res.render("home"),{
        title: "Home Page"
    }
})

const PORT = 3000;
app.listen(3000, ()=>{
    console.log("Web site is up and running")
})
