const express = require('express');
const expenseController = require('../controllers/expense');
const router = express.Router();


router.post('/add-expense', expenseController.addExpense);

router.get('/get-expenses', expenseController.getExpenses);

router.delete('/delete-expense/:expenseID', expenseController.deleteExpense);

router.put('/edit-expense/:expenseID', expenseController.editExpense);

module.exports = router;
