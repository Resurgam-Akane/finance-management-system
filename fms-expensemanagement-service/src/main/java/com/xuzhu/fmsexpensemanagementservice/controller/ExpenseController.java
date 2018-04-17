package com.xuzhu.fmsexpensemanagementservice.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExpenseController {

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public String loadExpenses(@PathVariable String username) {
        return username;
    }

    @RequestMapping(value = "/addExpenseItem/{username}", method = RequestMethod.GET)
    public String addExpenseItem(@PathVariable String username) {
        return username;
    }
}
