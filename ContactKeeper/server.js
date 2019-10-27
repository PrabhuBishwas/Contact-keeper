const express = require("express");
const connectDB = require('./config/db');

const app = express();

connectDB();

app.use(express.json({extended: false}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res)=> res.json({'msg': 'Welcome to the contactKeeper...'}));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('/ome', function(req, res){
  res.render('Home');
})

app.listen(5000, function(){
  console.log("Server is running on port 5000");
});
