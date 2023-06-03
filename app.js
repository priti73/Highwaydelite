const path = require('path');
const fs=require('fs');
const express = require('express');
const cors=require('cors')
const bodyParser = require('body-parser');
const sequelize=require('./util/database');
const User=require('./models/signup');

const app = express();
app.use(cors());
  
const usersrouteRoutes = require('./routes/signup');
const loginRoutes = require('./routes/login');
const otpRoutes=require('./routes/otp');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'view')));


app.use(usersrouteRoutes);
app.use(loginRoutes);
app.use(otpRoutes);


sequelize
//.sync()
.sync({force: true})
.then(result=>{
   app.listen(3000);
})
.catch(err=>{
    console.log(err);
}); 





