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

// the || operator is used to maintain the 3000 port acessible when running locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log("Web site is up and running")
})
