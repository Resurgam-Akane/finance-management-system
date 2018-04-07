package com.xuzhu.fmsincomemanagementservice.controller;


import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class IncomeController {

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public String incomeInfo(@PathVariable String username) {
        return username;
    }
}
