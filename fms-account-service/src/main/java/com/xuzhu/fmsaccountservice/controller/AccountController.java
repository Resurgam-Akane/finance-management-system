package com.xuzhu.fmsaccountservice.controller;

import com.xuzhu.fmsaccountservice.domain.Account;
import com.xuzhu.fmsaccountservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public Account getAccountByUsername(@PathVariable String username) {
        return accountService.loadAccountByUsername(username);
    }
}
