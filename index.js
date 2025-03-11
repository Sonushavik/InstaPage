const express = require('express');
const users = require('./data.json');
const path = require('path')
const app = express();
const PORT = 8080

app.use(express.static(path.join(__dirname, "./public/images")));
app.use(express.static(path.join(__dirname,("./public"))))


app.set('view engine', 'ejs');

app.get("/", (req,res) => {
        res.render("home.ejs")
})

app.get("/ig/:userid", (req, res) => {
        let { userid } = req.params;
        const user = users.users.find(user => user.userid === userid);
    
        if (user) {
            const postLength = user.posts.length;
            res.render("userProfile.ejs", { user, postLength });
        } else {
            res.status(404).render("error.ejs");
        }
    });
    
    
app.listen(PORT, () => {
        console.log(`App is listening on localhost:${PORT}`)
})