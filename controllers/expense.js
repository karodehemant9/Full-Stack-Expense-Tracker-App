const Expense = require('../models/expense');

exports.addExpense = ((req, res, next) => {
  const amount = req.body.amount;
  console.log(amount);
  const description = req.body.description;
  console.log(description);
  const category = req.body.category;
  console.log(category);
  Expense.create({
    amount: amount,
    description: description,
    category: category
  })
  .then(result => {
    console.log('Expense created');
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  }); 
})


exports.getExpenses = ((req, res, next) => {
  Expense.findAll()
  .then(expenses => {
    console.log(expenses);
    res.send(expenses);
  })
  .catch(err => console.log(err));
})




exports.deleteExpense = ((req, res, next) => {
  const expenseId = req.params.expenseID;
  console.log('expense id to delete expense is: ')
  console.log(expenseId);

  Expense.destroy({ where: { id: expenseId } }); 
  res.send('record deleted');
})



exports.editExpense = ((req, res, next) => {
  const expenseId = req.params.expenseID;
  console.log('expense id to update expense is: ')
  console.log(expenseId);

  const amount = req.body.amount;
  console.log(amount);
  const description = req.body.description;
  console.log(description);
  const category = req.body.category;
  console.log(category);
  
  Expense.update({amount: amount, description: description, category: category}, 
  {where : {id: expenseId}})
  .then(updatedExpense => {
    console.log(updatedExpense);
    res.send(updatedExpense);
  })
  .catch(err => {
    console.log(err);
  });  
})