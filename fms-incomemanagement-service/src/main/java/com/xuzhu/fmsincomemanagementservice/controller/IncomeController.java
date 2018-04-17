package com.xuzhu.fmsincomemanagementservice.controller;


import com.xuzhu.fmsincomemanagementservice.service.IncomesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.xuzhu.fmsincomemanagementservice.domain.Item;

import javax.validation.Valid;
import java.util.List;

@RestController
public class IncomeController {

    @Autowired
    IncomesService incomesService;

    @RequestMapping(value = "/addIncomeItem/{username}", method = RequestMethod.POST)
    public String addIncomeItem(@PathVariable String username, @Valid @RequestBody Item item) {
        return incomesService.addIncomesItem(username, item);
    }

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public List<Item> loadIncomes(@PathVariable String username) {
        return incomesService.loadIncomes(username);
    }
}
