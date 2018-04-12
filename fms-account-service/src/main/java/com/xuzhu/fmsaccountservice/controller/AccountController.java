package com.xuzhu.fmsaccountservice.controller;

import com.xuzhu.fmsaccountservice.domain.Account;
import com.xuzhu.fmsaccountservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class AccountController {

    @Autowired
    AccountService accountService;

    @RequestMapping(value = "/{username}", method = RequestMethod.GET)
    public Account getAccountByUsername(@PathVariable String username) {
        return accountService.loadAccountByUsername(username);
    }

    @RequestMapping(value = "/setPersonalInfo", method = RequestMethod.POST)
    public String setPersonalInfo(@Valid @RequestBody Account account) {
        return accountService.setPersonalInfo(account);
    }
}
