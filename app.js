const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database');
const expenseRoutes = require('./routes/expense');
const Expense = require('./models/expense');

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());



app.use('/expense', expenseRoutes);

app.use('/', (req, res) =>{
    res.send('Home page');
});



sequelize.sync({force: true})
.then(result =>{
})
.catch(err =>{
    console.log(err);
})

app.listen(8000);
