package com.xuzhu.fmsincomemanagementservice.controller;


import com.xuzhu.fmsincomemanagementservice.service.IncomesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.xuzhu.fmsincomemanagementservice.domain.Item;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.util.List;

@RestController
public class IncomeController {

    @Autowired
    IncomesService incomesService;

    @RequestMapping(value = "/addIncomeItem/{username}", method = RequestMethod.POST)
    public List<Item> addIncomeItem(@PathVariable String username, @Valid @RequestBody Item item) {
        return incomesService.addIncomesItem(username, item);
    }

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public List<Item> loadIncomes(@PathVariable String username) {
        return incomesService.loadIncomes(username);
    }

    @RequestMapping(value = "/deleteIncomeItem/{username}", method = RequestMethod.POST)
    public List<Item> deleteIncomeItem(@PathVariable String username, @Valid @RequestParam String index) {
        return incomesService.deleteIncomesItem(username, Integer.parseInt(index));
    }

    @RequestMapping(value = "/editIncomeItem/{username}/{index}", method = RequestMethod.POST)
    public List<Item> editIncomeItem(@PathVariable String username, @Valid @PathVariable String index, @Valid @RequestBody Item item) {
        return incomesService.editIncomesItem(username, Integer.parseInt(index), item);
    }

    @RequestMapping(value = "/uploadFile/{username}", method = RequestMethod.POST)
    public String uploadIncomeData(@PathVariable String username, MultipartFile file) {
        if (file != null)
            return "haha!";
        else return "fail";
    }
}
