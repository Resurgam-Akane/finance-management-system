package com.xuzhu.fmsexpensemanagementservice.controller;

import com.xuzhu.fmsexpensemanagementservice.domain.Item;
import com.xuzhu.fmsexpensemanagementservice.service.ExpensesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class ExpenseController {

    @Autowired
    ExpensesService expensesService;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public List<Item> loadExpenses(@PathVariable String username) {
        return expensesService.loadExpenses(username);
    }

    @RequestMapping(value = "/addExpenseItem/{username}", method = RequestMethod.POST)
    public List<Item> addExpenseItem(@PathVariable String username, @Valid @RequestBody Item item) {
        return expensesService.addExpensesItem(username, item);
    }

    @RequestMapping(value = "/deleteExpenseItem/{username}", method = RequestMethod.POST)
    public List<Item> deleteExpenseItem(@PathVariable String username, @Valid @RequestParam String index) {
        return expensesService.deleteExpensesItem(username, Integer.parseInt(index));
    }

    @RequestMapping(value = "/editExpenseItem/{username}/{index}", method = RequestMethod.POST)
    public List<Item> editExpenseItem(@PathVariable String username, @Valid @PathVariable String index, @Valid @RequestBody Item item) {
        return expensesService.editExpensesItem(username, Integer.parseInt(index), item);
    }
}
