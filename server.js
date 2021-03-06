const express = require('express');
const morgan = require('morgan');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan('dev'))
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, ()=>{
    console.log(`App running on port ${PORT}`);
});